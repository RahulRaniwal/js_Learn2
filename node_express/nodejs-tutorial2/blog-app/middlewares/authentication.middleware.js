const { validateToken } = require("../services/authentication.service.js");
const authenticate = (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return next(); // Allow unauthenticated requests to proceed
    }

    // Validate token
    const payload = validateToken(token);
    req.user = payload; // Attach user data to request object
  } catch (error) {
    // Silently fail if token validation fails
  }
  return next(); // Proceed regardless of token status
};

module.exports = { authenticate };
