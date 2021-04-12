const express = require("express");
const PostingModel = require("../models/Posting.model");
const UserModel = require("../models/User.model");
const LOCATION_ENUM = require("../utils/constants");

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
  res.render("posting/post-form.hbs", {
    locations: LOCATION_ENUM,
  });
});

router.post("/new", isLoggedIn, (req, res, next) => {
  // const title = req.body.title
  // const description = req.body.description
  // const location = req.body.location
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

  if (!title) {
    res.render("/posting/post-form", {
      errorMessage: "Provide a title according to your post ",
    });
    return;
  }

  if (!description) {
    return res.render("/posting/post-form", {
      errorMessage: "You need to write a description",
    });
  }

  if (!hourlyFee) {
    return res.render("/posting/post-form", {
      errorMessage: "Please provide a price",
    });
  }

  PostingModel.findOne({ title }).then((found) => {
    if (found) {
      return res.render("/posting/post-form", {
        errorMessage: "This post title exists already",
      });
    }
    // THere is no organization with this title: we are free to take it
    PostingModel.create({
      title,
      description,
      location,
      address,
      phoneNumber,
      insurance, //["true", "false"]
      hourlyFee,
      image,
      postedBy: req.session.user._id,
    })
      .then((createdPostingModel) => {
        console.log("createdPostingModel:", createdPostingModel);
        // http://localhost:3000/organization/${createdPostingModel._id}
        res.redirect(`/profile`);
      })
      .catch((err) => {
        console.log(err);
        res.render("/posting/post-form", {
          errorMessage: "Error creating post***",
        });
      });
  });

  //   UserModel.findByIdAndUpdate(
  //     req.session.user._id,
  //     {
  //       posting: req.body,
  //     },
  //     { new: true }
  //   )
  //     .then((User) => {
  //       res.redirect("/profile");
  //     })
  //     .catch((err) => {
  //       console.log("new-post-error***", err);
  //     });
});

// router.get("/:view", (req, res, next) => {
//   PostingModel.findById(req.params.view).populate("postedBy");
//   res.render("posting/post.hbs");
// });

router.get("/:edit", isLoggedIn, (req, res, next) => {
  console.log("posting: req.body***", req.params.edit);
  // res.render("posting/edit-post.hbs",  { posting: req.body });
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
  PostingModel.findByIdAndUpdate(
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
