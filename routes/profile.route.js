const express = require("express");
const UserModel = require("../models/User.model");

const router = express.Router();

router.get("/", (req, res) => {
  UserModel.find().then((allUserModels) => {
    console.log("allUserModels:", allUserModels);
  });
});

// router.get("/lucky")

module.exports = router;
