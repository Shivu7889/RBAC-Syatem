const jwt = require("jsonwebtoken");
const jwtSecret = require("../config/jwtSecret");
const User = require("../models/userModel");

const tokenBlacklist = new Set(); // In-memory blacklist for demonstration

// Protect Middleware to verify JWT and check blacklist
const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      
      // Check if the token is blacklisted
      if (tokenBlacklist.has(token)) {
        return res.status(401).json({ message: "Token is invalidated (logged out)" });
      }

      const decoded = jwt.verify(token, jwtSecret);
      req.user = await User.findById(decoded.id);
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }
  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

module.exports = { protect, tokenBlacklist };
