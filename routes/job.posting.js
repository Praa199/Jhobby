const express = require("express");
const Posting = require("../models/Posting.model");

const router = express.Router();

router.get("/posting-results", (req, res) => {
  Posting.find().then((allPostings) => {
    console.log("allPostings:", allPostings);
  });
});

// router.get("/lucky")

module.exports = router;
