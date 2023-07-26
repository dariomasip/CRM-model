const Lead = require("../models/Lead");

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
    agent: agent_id,
  } = req.body;

  try {
    // Create a new lead record in the database.
    const leadCreation = await Lead.create({
      name,
      country_id,
      company_id,
      province,
      locality,
      agent_id,
      state_id: 1,
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

module.exports = leadController;
