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

module.exports = leadController;
