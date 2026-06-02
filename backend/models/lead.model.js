const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({

  fullName: {
    type: String,
    required: true,
  },

  contact: {
    type: String,
    required: true,
  },

  eventDate: {
    type: String,
  },

  eventDays: {
    type: String,
  },

  location: {
    type: String,
  },

  budget: {
    type: String,
  },

  eventType: {
    type: String,
  },

}, {
  timestamps: true,
});

module.exports = mongoose.model("Lead", leadSchema);