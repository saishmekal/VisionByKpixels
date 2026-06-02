const express = require("express");

const router = express.Router();

const {
  createLead,
} = require("../controllers/lead.controller.js");

router.post("/", createLead);

module.exports = router;