const mongoose = require("mongoose");
let patientSchema = new mongoose.Schema({
  title: String,
  forename: String,
  surename: String,
  date: Date,
  address: String,
  town: String,
  country: String,
  postalcode: String,
  email: String,
  landline: String,
});

const patientModel = mongoose.model("allpatients", patientSchema);

module.exports = patientModel