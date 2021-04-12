const express = require("express");

const router = express.Router();

const isLoggedIn = require("../middlewares/isLoggedIn");

router.get("/inbox", isLoggedIn, (req, res, next) => {
  res.render("messages/inbox.hbs");
});

router.get("/new", isLoggedIn, (req, res, next) => {
  res.render("messages/write-message.hbs");
});

module.exports = router;
