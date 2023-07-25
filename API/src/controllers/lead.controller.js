const Lead = require("../models/Lead");

const leadController = {};

/**
 * Get all leads.
 * @param {*} req       The HTTP request object.
 * @param {*} res       The HTTP response object.
 * @returns {Object}    The HTTP response object.
 */
leadController.getLeads = (req, res) => {
  const leads = Lead.findAll();
  return res.send(leads);
};

module.exports = leadController;
