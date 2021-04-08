const express = require("express");

const router = express.Router();

router.get("/inbox", (req, res, next) => {
  res.render("messages/inbox.hbs");
});

router.get("/new", (req, res, next) => {
  res.render("messages/write-message.hbs");
});

module.exports = router;
