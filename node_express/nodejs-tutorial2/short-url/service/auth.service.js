const jwt = require("jsonwebtoken");
const secretKey = "Rahul!2345!@#$%"

// set user
function setUser(user){
  const payload = {
    _id: user._id,
    email: user.email,
    role: user.role,
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
    const payload = jwt.verify(token, secretKey);
    return payload; // Token is valid
  } catch (err) {
    console.error("Token verification failed:", err.message); // Log the error
    return null; // Token is invalid
  }
}

module.exports = {
  setUser,
  getUser,
}