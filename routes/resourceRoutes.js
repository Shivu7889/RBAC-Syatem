const express = require("express");
const { getResource } = require("../controllers/resourceController");
const { protect } = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/", protect, roleMiddleware(["Admin", "Moderator"]), getResource); // Admin/Moderator access

module.exports = router;
