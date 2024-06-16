var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("user", { title: "User Page", message: "Users listed" });
});

module.exports = router;
