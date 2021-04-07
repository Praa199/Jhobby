const express = require("express");
const User = require("../models/User.model");

const router = express.Router();

router.get("/profile", (req, res) => {
  User.find().then((allUsers) => {
    console.log("allUsers:", allUsers);
  });
});

// router.get("/lucky")

module.exports = router;
