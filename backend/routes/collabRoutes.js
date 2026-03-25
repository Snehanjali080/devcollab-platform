const express = require("express");
const router = express.Router();

const { sendRequest } = require("../controllers/collabController");
const authMiddleware = require("../middleware/authMiddleware");
const {
 getRequests,
 acceptRequest,
 rejectRequest
} = require("../controllers/collabController");

router.get("/requests", authMiddleware, getRequests);

router.put("/accept/:id", authMiddleware, acceptRequest);

router.put("/reject/:id", authMiddleware, rejectRequest);

router.post("/request", authMiddleware, sendRequest);



module.exports = router;