const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  title: {
    type: String,
    required: true
  },

  author: {
    type: String,
    required: true
  },

  category: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  preparation: {
    type: String,
    default: "No planning is needed. Make it fun and spontaneous for your little ones!"
  }
})

const Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;