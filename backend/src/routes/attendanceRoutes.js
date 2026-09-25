const express = require("express");

const {
    scanQrCode,
    getEventAttendance,
} = require("../controllers/attendanceController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

const router = express.Router();

// Get attendance for an event - Organizer, Admin
router.get(
    "/event/:eventId",
    protect,
    authorize("organizer", "admin"),
    getEventAttendance
);

// Scan QR Code to mark attendance - Organizer, Admin
router.post(
    "/scan/:eventId",
    protect,
    authorize("organizer", "admin"),
    scanQrCode
);

module.exports = router;
