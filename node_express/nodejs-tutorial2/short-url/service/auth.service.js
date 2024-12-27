const jwt = require("jsonwebtoken");
const secretKey = "Rahul!2345!@#$%"

// set user
function setUser(user){
  const payload = {
    _id: user.id,
    email: user.email
  }
  return jwt.sign(payload , secretKey);
}
// get user
function getUser(token){
  if (!token) {
    return null;
  }
  try {
    // Only verify the token, don't return the decoded payload
    jwt.verify(token, secretKey);
    return true; // Token is valid
  } catch (err) {
    console.error("Token verification failed:", err.message); // Log the error
    return false; // Token is invalid
  }
}

module.exports = {
  setUser,
  getUser,
}