const express = require("express");
const router = express.Router();
const userExtractor = require("../middlewares/userExtractor");

const {
  getLeads,
  createLead,
  updateState,
} = require("../controllers/lead.controller");

router.get("/", userExtractor, getLeads);
router.post("/create", userExtractor, createLead);
router.put("/:leadId/update-state/:newStateId", userExtractor, updateState);

module.exports = router;
