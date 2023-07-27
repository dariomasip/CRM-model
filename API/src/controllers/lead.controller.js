const Lead = require("../models/Lead");
const ActivityLeads = require("../models/ActivityLeads");
const CONSTANTS_GLOBALS = require("../globals/constants");

const leadController = {};

/**
 * Get all paginated leads.
 * @param {*} req       The HTTP request object.
 * @param {*} res       The HTTP response object.
 * @returns {Object}    The HTTP response object.
 */
leadController.getLeads = async (req, res) => {
  // Get the limit and offset parameters from the request query.
  const { limit, offset } = req.query;

  // Try to get the leads from the database.
  try {
    const leads = await Lead.findAll({
      limit: Number(limit),
      offset: Number(offset),
    });

    // If there are no leads, return a 204 No Content response.
    if (!leads || leads.length === 0) {
      return res.status(204).send();
    }

    // Return the leads as a JSON response.
    return res.send(leads);
  } catch (error) {
    // Log the error and return an error response.
    console.error({ error });

    return res.send({
      errorMessage: error.message,
    });
  }
};

/**
 * The `leadController.createLead` function creates a new lead record in the database.
 *
 * @param {Object} req The HTTP request.
 * @param {Object} res The HTTP response.
 * @returns {Object} The newly created lead record.
 */
leadController.createLead = async (req, res) => {
  // Get the lead information from the HTTP request.
  const {
    name,
    country: country_id,
    province,
    locality,
    company: company_id,
  } = req.body;

  try {
    // Create a new lead record in the database.
    const leadCreation = await Lead.create({
      name,
      country_id,
      company_id,
      province,
      locality,
      agent_id: req.id,
      state_id: CONSTANTS_GLOBALS.statusLeads.new,
    });
    // Save the lead record in the database.
    await leadCreation.save();

    // Return the HTTP response to the client.
    return res.send(leadCreation);
  } catch (error) {
    // Log the error and return an error response.
    console.error({ error });

    return res.send({
      errorMessage: error.message,
    });
  }
};

/**
 * This function updates the state of a lead.
 *
 * @param {Object} req The request object.
 * @param {Object} res The response object.
 * @returns {Object} The updated lead.
 */
leadController.updateState = async (req, res) => {
  // Get the lead ID and new state ID from the request.
  const { leadId, newStateId } = req.params;

  try {
    const updatedState = await Lead.update(
      {
        state_id: newStateId,
      },
      {
        where: {
          id_lead: leadId,
        },
      }
    ).then(async () => {
      await ActivityLeads.create({
        lead_id: leadId,
        user_id: req.id,
        type_id: CONSTANTS_GLOBALS.typesActivityLeads.changeState,
        date: Date.now(),
        description: `El cliente ${leadId} cambió al estado ${newStateId}.`,
      }).catch((error) => {
        console.error({ error });
        return res.send({
          errorMessage: error.message,
        });
      });
    });

    // Return the updated lead.
    return res.send(updatedState);
  } catch (error) {
    // Log the error and return an error response.
    console.error({ error });

    return res.send({
      errorMessage: error.message,
    });
  }
};

module.exports = leadController;
