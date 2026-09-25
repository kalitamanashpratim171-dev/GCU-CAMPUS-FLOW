const Attendance = require("../models/Attendance");
const Registration = require("../models/Registration");
const Event = require("../models/Event");

// @desc    Scan QR Token for Attendance
// @route   POST /api/attendance/scan/:eventId
// @access  Organizer, Admin
const scanQrCode = async (req, res) => {
    try {
        const { eventId } = req.params;
        const { qrToken } = req.body;

        if (!qrToken) {
            return res.status(400).json({
                success: false,
                message: "QR Token is required",
            });
        }

        // 1. Verify Event
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({
                success: false,
                message: "Event not found",
            });
        }

        // Optional: Check if event is ongoing or at least today (business rule decision)
        // For now, we assume if it's PUBLISHED/ONGOING it's fine.

        // Authorization check: Is the user the organizer of this event or an admin?
        if (event.organizer.toString() !== req.user._id.toString() && req.user.role !== "admin") {
            return res.status(403).json({
                success: false,
                message: "Not authorized to scan attendance for this event",
            });
        }

        // 2. Find Registration by qrToken
        const registration = await Registration.findOne({ qrToken });
        if (!registration) {
            return res.status(400).json({
                success: false,
                message: "Invalid QR code",
            });
        }

        // 3. Verify Registration matches the Event
        if (registration.event.toString() !== eventId) {
            return res.status(400).json({
                success: false,
                message: "This QR code is for a different event",
            });
        }

        // 4. Verify Registration status
        if (registration.status !== "REGISTERED") {
            return res.status(400).json({
                success: false,
                message: "This registration is not active",
            });
        }

        // 5. Check if Attendance already exists
        const existingAttendance = await Attendance.findOne({
            registration: registration._id,
        });

        if (existingAttendance) {
            return res.status(409).json({
                success: false,
                message: "Attendance has already been marked for this user",
            });
        }

        // 6. Create Attendance Record
        const attendance = await Attendance.create({
            event: eventId,
            registration: registration._id,
            student: registration.student,
            scannedBy: req.user._id,
            status: "PRESENT",
        });

        res.status(201).json({
            success: true,
            message: "Attendance marked successfully",
            attendance,
        });
    } catch (error) {
        console.error("Scan QR Code error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while processing attendance",
            error: error.message,
        });
    }
};

// @desc    Get attendance for a specific event
// @route   GET /api/attendance/event/:eventId
// @access  Organizer, Admin
const getEventAttendance = async (req, res) => {
    try {
        const { eventId } = req.params;

        // Verify Event and Access
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({
                success: false,
                message: "Event not found",
            });
        }

        if (event.organizer.toString() !== req.user._id.toString() && req.user.role !== "admin") {
            return res.status(403).json({
                success: false,
                message: "Not authorized to view attendance for this event",
            });
        }

        const attendees = await Attendance.find({ event: eventId })
            .populate("student", "name email studentId")
            .populate("scannedBy", "name")
            .sort({ scannedAt: 1 });

        res.status(200).json({
            success: true,
            count: attendees.length,
            attendees,
        });
    } catch (error) {
        console.error("Get event attendance error:", error);
        res.status(500).json({
            success: false,
            message: "Server error while fetching attendance",
            error: error.message,
        });
    }
};

module.exports = {
    scanQrCode,
    getEventAttendance,
};
