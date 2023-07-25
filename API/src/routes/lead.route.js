const express = require("express");
const router = express.Router();

const { getLeads } = require("../controllers/lead.controller");

router.get("/", getLeads);

module.exports = router;
