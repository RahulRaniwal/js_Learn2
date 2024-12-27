const User = require("../models/user.model");
const { v4: uuidv4 } = require("uuid");
const {setUser} = require("../service/auth.service");

async function createUser(req , res){
  const {name , email , password} = req.body;
  await User.create({name, email , password});

  return res.render('/');
}

async function userLogin(req, res) {
  const {email, password } = req.body;
  const user = await User.findOne({ email  , password});

  // check if user exist
  if(!user){
    return res.render("login", {
      error: "Invalid username or password",
    });
  }
  const token = setUser(user);
  res.cookie("uid" , token);
  return res.redirect("/");
}

module.exports = {
  createUser,
  userLogin
}