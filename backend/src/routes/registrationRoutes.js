const express = require("express");

const {
    registerForEvent,
    getMyRegistrations,
    getEventRegistrations,
} = require("../controllers/registrationController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

const router = express.Router();

// Get logged in user's registrations
router.get(
    "/my-registrations",
    protect,
    getMyRegistrations
);

// Get registrations for a specific event
router.get(
    "/event/:eventId",
    protect,
    authorize("organizer", "admin"),
    getEventRegistrations
);

// Register for an event
router.post(
    "/:eventId",
    protect,
    registerForEvent
);

module.exports = router;
