const express = require("express");

const {
    submitFeedback,
    getEventFeedback,
    getMyFeedback,
} = require("../controllers/feedbackController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

const router = express.Router();

// Get my feedback
router.get(
    "/my-feedback",
    protect,
    getMyFeedback
);

// Get feedback for an event
router.get(
    "/event/:eventId",
    protect,
    authorize("organizer", "admin"),
    getEventFeedback
);

// Submit feedback
router.post(
    "/:eventId",
    protect,
    submitFeedback
);

module.exports = router;
