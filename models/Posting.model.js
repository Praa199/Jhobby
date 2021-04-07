const { Schema, model } = require("mongoose");
const LOCATION_ENUM = require("../utils/consts");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const postingSchema = new Schema({
  title: {
    type: String,
    required: true,
    min: 5,
  },
  description: {
    type: String,
    required: true,
    min: 20,
    max: 100,
  },
  location: {
    type: String,
    default: "Berlin",
    enum: LOCATION_ENUM,
  },
  date: Date,
  adress: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  insurance: {
    enum: ["true", "false"],
  },
  hourlyFee: {
    type: String,
  },
  image: {
    type: [String],
    default: [""],
  },
});

const Posting = model("Posting", postingSchema);

module.exports = Posting;
