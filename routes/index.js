var express = require("express");
var router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages });
});

/* GET new page */
router.get("/new", function (req, res) {
  res.render("form");
});

/* POST new page */
router.post("/new", function (req, res) {
  messages.push({
    text: req.body.text,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
