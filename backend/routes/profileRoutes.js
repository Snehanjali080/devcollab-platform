const express = require("express");
const { getProfile } = require("../controllers/profileController");
const authMiddleware = require("../middleware/authMiddleware");

const { updateProfile } = require("../controllers/profileController");

const router = express.Router();

router.get("/:id", authMiddleware, getProfile);


router.put("/update", authMiddleware, updateProfile);

module.exports = router;

