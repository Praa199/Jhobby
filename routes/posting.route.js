const express = require("express");
const UserModel = require("../models/User.model");

const router = express.Router();

const isLoggedIn = require("../middlewares/isLoggedIn");

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

router.get("/new", isLoggedIn, (req, res, next) => {
  res.render("posting/post-form.hbs");
});

router.post("/new", (req, res, next) => {
  const {
    title,
    description,
    location,
    address,
    phoneNumber,
    insurance,
    hourlyFee,
    image,
  } = req.body;
  UserModel.findByIdAndUpdate(
    req.session.user._id,
    {
      posting: req.body,
    },
    { new: true }
  )
    .then((User) => {
      res.redirect("/profile");
    })
    .catch((err) => {
      console.log("new-post-error***", err);
    });
});

router.get("/view", (req, res, next) => {
  res.render("posting/post.hbs");
});

router.get("/edit", isLoggedIn, (req, res, next) => {
  res.render("posting/edit-post.hbs");
});

router.post("/edit", (req, res, next) => {
  const {
    title,
    description,
    location,
    address,
    phoneNumber,
    insurance,
    hourlyFee,
    image,
  } = req.body;
  UserModel.findByIdAndUpdate(
    req.session.user._id,
    {
      posting: req.body,
    },
    { new: true }
  )
    .then((User) => {
      res.redirect("/profile");
    })
    .catch((err) => {
      console.log("new-post-error***", err);
    });
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

module.exports = router;
