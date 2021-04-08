const express = require("express");
const router = express.Router();

const isLoggedIn = require("../middlewares/isLoggedIn");

const UserModel = require("../models/User.model");

router.get("/", isLoggedIn, (req, res) => {
  res.render("profile-views/profile", { user: req.session.user });
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
  ).then((newUser) => {
    // console.log("newUser:", newUser);
    req.session.user = newUser;
    res.redirect("/profile");
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

// UserModel.findById({ _id: "606d7cf7782bc3d2058fab57" })
// .then((response) => {
//   // console.log("profile***", { response });
// })
// .catch((err) => {
//   console.log("error***", err);
// });

module.exports = router;
