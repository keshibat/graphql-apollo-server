const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
  carName: String,
  latfillup: Number,
  latfilluptime: String,
  lastfilluplocation: Number,
  fuelleft: Number,
  traveldsince: Number,
  diagnostic: String,
  diagnosticdetail: String,
  businessratio: Number,
  businesstotal: Number,
  averagespeed: Number,
  traveldistancetotal: Number,
  traveldistancethisyear: Number,
  timeincar: Number,
  emissions: Number,
  fueleconomy: Number,
  parking: String,
  timetraveld: String,
  startlocation: String,
  endlocation: String
});

module.exports = mongoose.model("Car", carSchema);











