const User = require("../models/user.model");

async function getAllUsers (req, res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
}


async function getUserById (req, res){
  const id = req.params.id;
  const user = await User.findById(id);
  return res.json(user);
}

async function createUser (req, res) {
  const body = req.body;
  if (!body || !body.first_name || !body.email) {
    return res.status(400).json({ message: "Mandatory feild are missing" });
  }
  const user = await User.create({
    firstName: body.first_name,
    lastName: body.last_name || "",
    email: body.email,
    jobTitle: body.job_title || "",
    gender: body.gender || "",
  });
  return res.status(201).json({ msg: "User created successfully" });
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
}