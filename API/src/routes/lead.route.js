const express = require("express");
const router = express.Router();
const userExtractor = require("../middlewares/userExtractor");

const { getLeads, createLead } = require("../controllers/lead.controller");

router.get("/", getLeads);
router.post("/create", userExtractor, createLead);

module.exports = router;
