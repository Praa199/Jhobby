const express = require("express");
const UserModel = require("../models/User.model");

const router = express.Router();

router.get("/", (req, res) => {
  UserModel.findById({ _id: "606d7cf7782bc3d2058fab57" })
    .then((response) => {
      // console.log("profile***", { response });
      res.render("profile-views/profile", { response });
    })
    .catch((err) => {
      console.log("error***", err);
    });
});

router.get("/edit", (req, res, next) => {
  console.log("edit-profile****");
  res.render("profile-views/edit-profile");
});

router.post("/edit", (req, res, next) => {
  console.log("edit-profile-form****");
  const { firstName, lastName, location, email, posting } = req.body;
  PostingModel.create()
    .then((result) => {
      res.render("posting/post-form.hbs");
    })
    .catch((err) => {});
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

// router.get("/lucky")

module.exports = router;
