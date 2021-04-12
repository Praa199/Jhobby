const express = require("express");
const router = express.Router();

const isLoggedIn = require("../middlewares/isLoggedIn");

const PostingModel = require("../models/Posting.model");
const UserModel = require("../models/User.model");

// const asyncFunc = async () => {};

// async function asyncFunc2() {}

router.get("/", isLoggedIn, (req, res) => {
  const user = req.session.user._id;

  PostingModel.find({ postedBy: user })
    .then((posting) => {
      // console.log("all posts in profile*****", posting);
      res.render("profile-views/profile", { posting });
    })
    .catch((err) => {
      console.log("fatal error ***", err);
    });
  // try {
  //   const myPosts = await PostingModel.find({
  //     postedBy: req.session.user._id,
  //   });
  //   // const whereIAmNotOwner = await Organization.find({
  //   //   $and: [
  //   //     { owner: { $ne: req.session.user._id } },
  //   //     { members: { $in: req.session.user._id } },
  //   //   ],
  //   // });
  //   res.render(
  //     "profile-views/profile",

  //     { postedBy: myPosts }
  //   );
  // } catch (error) {
  //   // code failed
  //   console.log(error);
  // }
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
      // console.log("newUser:", newUser);
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

// UserModel.findById({ _id: "606d7cf7782bc3d2058fab57" })
// .then((response) => {
//   // console.log("profile***", { response });
// })
// .catch((err) => {
//   console.log("error***", err);
// });

module.exports = router;
