const router = require("express").Router();
const app = require("../routes/auth");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

app.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
