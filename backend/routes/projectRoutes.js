const express = require("express");
const router = express.Router();

const {
  createProject,
  getProjects,
  joinProject
} = require("../controllers/projectController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/create", authMiddleware, createProject);

router.get("/", authMiddleware, getProjects);

router.put("/join/:projectId", authMiddleware, joinProject);

module.exports = router;