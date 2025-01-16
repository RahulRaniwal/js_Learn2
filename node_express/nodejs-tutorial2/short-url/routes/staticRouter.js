const express = require("express");
const router = express.Router();
const URL = require("../models/url.model");
const { restrictTo } = require("../middlewares/auth.middleware");


router.get('/' , restrictTo(["normal" , "admin"]), async(req  , res) =>{
  // if(!req.user) return res.redirect("/login"); //no need of this
  const allUrls = await URL.find({createdBy: req.user._id});
  return res.render("home" , {urls: allUrls});
});

router.get('/signup' , (req , res) =>{
  return res.render("signup");
})

router.get('/login' , (req , res) =>{
  return res.render("login");
})


module.exports = router;