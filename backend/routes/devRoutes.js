const express = require("express");
const { searchDevelopers } = require("../controllers/devController");

const router = express.Router();

router.get("/", searchDevelopers);

module.exports = router;