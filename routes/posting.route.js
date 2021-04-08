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

router.get("/new", (req, res, next) => {
  console.log("new-post****");
  res.render("posting/post-form.hbs");
});

router.post("/new", (req, res, next) => {
  console.log("new-post-form****");
  const { title, location } = req.body;
  PostingModel.create()
    .then((result) => {
      res.render("posting/post-form.hbs");
    })
    .catch((err) => {});
});

router.get("/view", (req, res, next) => {
  res.render("posting/post.hbs");
});

router.get("/edit", (req, res, next) => {
  res.render("posting/edit-post.hbs");
});

router.get("/delete", (req, res, next) => {
  res.redirect("/profile");
});

router.get("/:post", (req, res, next) => {
  PostingModel.findById()
    .then((result) => {
      console.log(":post****");
      res.render("posting/post", { result });
    })
    .catch((err) => {});
});

// router.get("/lucky")

// router.get("/result", (req, res, next) => {
//   console.log("something****");
//   res.render("posting/post-results");
// });

module.exports = router;
