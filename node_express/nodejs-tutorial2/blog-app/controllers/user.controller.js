const crypto = require("crypto");

const User = require("../models/user.model.js");

const signup = async (req, res) => {
  try {
    const { fullName, email, password, username } = req.body;

    // validation check
    if (!fullName || !email || !password || !username) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ message: "User already exists with this email" });
    }

    const newUser = await User.create({
      fullName,
      email,
      password,
      username,
    });
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// user login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation check
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const token = await User.matchPasswordAndGenerateToken(email, password);
    return res
      .cookie("token", token, {
        httpOnly: true,
      })
      .redirect("/");
  } catch (error) {
    console.error(error);
    return res.render("signin", {
      error: "Incorrect credentials",
    });
  }
};

const logout = async (req, res) => {
  try {
    // clear the token
    res.clearCookie("token", {
      httpOnly: true,
    });
    return res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  signup,
  login,
  logout,
};
