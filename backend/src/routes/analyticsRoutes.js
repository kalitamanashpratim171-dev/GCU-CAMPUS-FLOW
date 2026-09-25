const express = require("express");

const {
    getAdminDashboardStats,
    getOrganizerDashboardStats,
    getEventReport,
} = require("../controllers/analyticsController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

const router = express.Router();

// Get Admin dashboard statistics
router.get(
    "/admin",
    protect,
    authorize("admin"),
    getAdminDashboardStats
);

// Get Organizer dashboard statistics
router.get(
    "/organizer",
    protect,
    authorize("organizer", "admin"),
    getOrganizerDashboardStats
);

// Get specific event report
router.get(
    "/event/:eventId",
    protect,
    authorize("organizer", "admin"),
    getEventReport
);

module.exports = router;
