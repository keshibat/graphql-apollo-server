const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ownerSchema = new Schema({
  firstName: String
});

module.exports = mongoose.model("Owner", ownerSchema);
