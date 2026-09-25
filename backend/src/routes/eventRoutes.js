const express = require("express");

const {
    createEvent,
    getEvents,
    getEventById,
    submitEvent,
    approveEvent,
    rejectEvent,
    publishEvent,
} = require("../controllers/eventController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

const router = express.Router();

// Get all events
router.get(
    "/",
    protect, // Assuming students/organizers/admins can see events
    getEvents
);

// Get event by ID
router.get(
    "/:id",
    protect,
    getEventById
);

// Create event - Organizer or Admin only
router.post(
    "/",
    protect,
    authorize("organizer", "admin"),
    createEvent
);

// Submit event for approval
router.patch(
    "/:id/submit",
    protect,
    authorize("organizer", "admin"),
    submitEvent
);

// Approve event - Admin only
router.patch(
    "/:id/approve",
    protect,
    authorize("admin"),
    approveEvent
);

// Reject event - Admin only
router.patch(
    "/:id/reject",
    protect,
    authorize("admin"),
    rejectEvent
);

// Publish event - Organizer or Admin
router.patch(
    "/:id/publish",
    protect,
    authorize("organizer", "admin"),
    publishEvent
);

module.exports = router;
