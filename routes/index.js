const router = require("express").Router();
const app = require("../routes/auth");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// router.get("/result", (req, res, next) => {
//   res.render("posting/post-results");
// });

app.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
