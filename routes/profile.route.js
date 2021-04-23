const express = require("express");
const router = express.Router();

const isLoggedIn = require("../middlewares/isLoggedIn");

const PostingModel = require("../models/Posting.model");
const UserModel = require("../models/User.model");

router.get("/", isLoggedIn, (req, res) => {
  const user = req.session.user._id;

  PostingModel.find({ postedBy: user })
    .then((posting) => {
      res.render("profile-views/profile", { posting });
    })
    .catch((err) => {
      console.log("fatal error ***", err);
    });
});

router.get("/edit", isLoggedIn, (req, res, next) => {
  res.render("profile-views/edit-profile", { user: req.session.user });
});

router.post("/edit", (req, res, next) => {
  const { firstName, lastName, location, email, images } = req.body;
  UserModel.findByIdAndUpdate(
    req.session.user._id,
    { firstName, lastName, location, email, images },
    { new: true }
  )
    .then((newUser) => {
      req.session.user = newUser;
      res.redirect("/profile");
    })
    .catch((err) => {
      console.log("edit-profile-error***", err);
    });
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
