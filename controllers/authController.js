const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");
const { tokenBlacklist } = require("../middleware/authMiddleware");

const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  if (user) {
    const token = generateToken(user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token,
    });
  } else {
    res.status(400).json({ message: "Invalid user data" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = generateToken(user._id);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token,
    });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

const logoutUser = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  
  // Blacklist the token
  tokenBlacklist.add(token);

  res.status(200).json({ message: "User logged out successfully" });
};

module.exports = { registerUser, loginUser, logoutUser };
