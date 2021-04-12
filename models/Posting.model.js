const { Schema, model } = require("mongoose");
const LOCATION_ENUM = require("../utils/constants");

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
  },
  date: Date,
  adress: {
    type: Object,
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
  postedBy: { type: Schema.Types.ObjectId, ref: "UserModel" },
});

const PostingModel = model("PostingData", postingSchema);

module.exports = PostingModel;
