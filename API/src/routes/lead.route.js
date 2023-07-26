const express = require("express");
const router = express.Router();

const { getLeads, createLead } = require("../controllers/lead.controller");

router.get("/", getLeads);
router.post("/create", createLead);

module.exports = router;
