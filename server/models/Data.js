const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  // Your data schema fields here
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
