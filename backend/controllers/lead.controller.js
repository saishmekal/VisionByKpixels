const Lead = require("../models/lead.model.js");
const appendToSheet = require("../config/googleSheets.js");

const createLead = async (req, res) => {

  try {

    // Save in MongoDB
    const lead = await Lead.create(req.body);

    // Save in Google Sheets
    await appendToSheet(req.body);

    res.status(201).json({
      success: true,
      message: "Lead saved successfully",
      data: lead,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createLead,
};