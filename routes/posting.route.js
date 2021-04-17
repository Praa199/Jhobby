const express = require("express");
const PostingModel = require("../models/Posting.model");
const UserModel = require("../models/User.model");
const LOCATION_ENUM = require("../utils/constants");

const router = express.Router();

const isLoggedIn = require("../middlewares/isLoggedIn");
const shouldNotBeLoggedIn = require("../middlewares/shouldNotBeLoggedIn");

router.get("/result", (req, res, next) => {
  PostingModel.find()
    .then((result) => {
      res.render("posting/post-results", { result });
    })
    .catch((err) => {
      console.log("fatal error ***", err);
    });
});

router.get("/new", isLoggedIn, (req, res, next) => {
  res.render("posting/post-form", {
    location: LOCATION_ENUM,
  });
});

router.post("/new", isLoggedIn, (req, res, next) => {
  const {
    title,
    date,
    description,
    location,
    address,
    phoneNumber,
    insurance,
    hourlyFee,
    image,
  } = req.body;

  if (!title) {
    res.render("posting/post-form", {
      errorMessage: "Provide a title according to your post ",
    });
    return;
  }

  if (!description) {
    return res.render("posting/post-form", {
      errorMessage: "You need to write a description",
    });
  }

  if (!location) {
    return res.render("posting/post-form", {
      errorMessage: "Please specify a location",
    });
  }

  if (!hourlyFee) {
    return res.render("posting/post-form", {
      errorMessage: "Please provide a price",
    });
  }

  PostingModel.findOne({ title }).then((found) => {
    if (found) {
      return res.render("posting/post-form", {
        errorMessage: "This post title exists already",
      });
    }
    // THere is no organization with this title: we are free to take it
    PostingModel.create({
      title,
      description,
      date,
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
});

router.get("/:id/view", (req, res, next) => {
  let id = req.params.id;
  PostingModel.findById(id)
    .then((posting) => {
      res.render("posting/post", { posting });
    })
    .catch((err) => {
      console.log("error showing single post***", err);
    });
});

router.get("/:id/edit", isLoggedIn, (req, res, next) => {
  let id = req.params.id;
  PostingModel.findById(id)
    .then((posting) => {
      res.render("posting/edit-post", { posting, locations: LOCATION_ENUM });
    })
    .catch((err) => {
      console.log("error showing edit-post form***", err);
    });
});

router.post("/:id/edit", isLoggedIn, (req, res, next) => {
  let id = req.params.id;
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
    res.render("posting/edit-post", {
      errorMessage: "Provide a title according to your post ",
    });
    return;
  }

  if (!description) {
    return res.render("posting/edit-post", {
      errorMessage: "You need to write a description",
    });
  }

  if (!location) {
    return res.render("posting/edit-post", {
      errorMessage: "Please specify a location",
    });
  }

  if (!hourlyFee) {
    return res.render("posting/edit-post", {
      errorMessage: "Please provide a price",
    });
  }

  PostingModel.findByIdAndUpdate(
    id,
    {
      title,
      description,
      location,
      address,
      phoneNumber,
      insurance,
      hourlyFee,
      image,
    },
    { new: true }
  )
    .then((result) => {
      res.redirect("/profile");
    })
    .catch((err) => {
      console.log("new-post-error***", err);
    });
});

router.get("/:id/delete", (req, res, next) => {
  let id = req.params.id;
  PostingModel.findByIdAndDelete(id)
    .then((result) => {
      res.redirect("/profile");
    })
    .catch((err) => {});
});

module.exports = router;
