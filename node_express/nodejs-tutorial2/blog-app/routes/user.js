const express = require('express');
const router = express.Router();

const {signup , login ,logout} = require("../controllers/user.controller.js");

// signup route
router.get("/signup" , (req , res) =>{
  return res.render("signup");
});
router.post("/signup" , signup);

// login route
router.get("/signin" , (req , res) =>{
  return res.render("signin");
})
router.post("/signin" , login);

router.get("/logout" , logout);

module.exports = router;