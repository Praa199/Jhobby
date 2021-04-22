const { Schema, model } = require("mongoose");
const LOCATION_ENUM = require("../utils/constants");
const fileUploader = require("../config/cloudinary.config");

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
    required: true,
  },
  date: { type: Date },
  address: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  insurance: {
    type: String,
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
  ratings: [
    {
      type: Number,
    },
  ],
});

const PostingModel = model("PostingData", postingSchema);

module.exports = PostingModel;
