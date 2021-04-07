const express = require("express");
const PostingModel = require("../models/Posting.model");

const router = express.Router();

router.get("/result", (req, res, next) => {
  PostingModel.find()
    .then((result) => {
      console.log("all users*****");
      res.render("posting/post-results", { result });
    })
    .catch((err) => {
      console.log("fatal error ***", err);
    });
});
// router.get("/lucky")

// router.get("/result", (req, res, next) => {
//   console.log("something****");
//   res.render("posting/post-results");
// });

module.exports = router;
