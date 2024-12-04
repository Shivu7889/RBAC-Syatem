const jwt = require("jsonwebtoken");
const jwtSecret = require("../config/jwtSecret");

const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
