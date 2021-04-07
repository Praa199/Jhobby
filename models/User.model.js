const { Schema, model } = require("mongoose");
const LOCATION_ENUM = require("../utils/constants.js");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  location: {
    type: String,
    default: "Berlin",
    enum: LOCATION_ENUM,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  posting: [String],
});

const UserModel = model("UserData", userSchema);

module.exports = UserModel;
