const Feedback = require("../models/Feedback");
const Attendance = require("../models/Attendance");
const Event = require("../models/Event");

// @desc    Submit feedback for an event
// @route   POST /api/feedback/:eventId
// @access  Authenticated User
const submitFeedback = async (req, res) => {
    try {
        const { eventId } = req.params;
        const studentId = req.user._id;
        const { rating, organizationRating, speakerRating, venueRating, comment } = req.body;

        if (!rating) {
            return res.status(400).json({
                success: false,
                message: "Overall rating is required",
            });
        }

        // 1. Verify Event exists
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({
                success: false,
                message: "Event not found",
            });
        }

        // 2. Verify Attendance - only students who actually attended can submit feedback
        const attendance = await Attendance.findOne({
            event: eventId,
            student: studentId,
            status: "PRESENT",
        });

        if (!attendance) {
            return res.status(403).json({
                success: false,
                message: "You must attend the event before you can submit feedback",
            });
        }

        // 3. Check for existing feedback
        const existingFeedback = await Feedback.findOne({
            event: eventId,
            student: studentId,
        });

        if (existingFeedback) {
            return res.status(409).json({
                success: false,
                message: "You have already submitted feedback for this event",
            });
        }

        // 4. Create Feedback
        const feedback = await Feedback.create({
            event: eventId,
            student: studentId,
            rating,
            organizationRating,
            speakerRating,
            venueRating,
            comment,
        });

        res.status(201).json({
            success: true,
            message: "Feedback submitted successfully",
            feedback,
        });
    } catch (error) {
        console.error("Submit feedback error:", error);
        res.status(500).json({
            success: false,
            message: "Server error while submitting feedback",
            error: error.message,
        });
    }
};

// @desc    Get feedback for a specific event
// @route   GET /api/feedback/event/:eventId
// @access  Organizer, Admin
const getEventFeedback = async (req, res) => {
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
                message: "Not authorized to view feedback for this event",
            });
        }

        const feedbackList = await Feedback.find({ event: eventId })
            .populate("student", "name") // Depending on privacy rules, you might want to keep it anonymous. For now, we include name.
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: feedbackList.length,
            feedback: feedbackList,
        });
    } catch (error) {
        console.error("Get event feedback error:", error);
        res.status(500).json({
            success: false,
            message: "Server error while fetching feedback",
            error: error.message,
        });
    }
};

// @desc    Get all feedback submitted by the logged-in student
// @route   GET /api/feedback/my-feedback
// @access  Authenticated User
const getMyFeedback = async (req, res) => {
    try {
        const studentId = req.user._id;

        const feedbackList = await Feedback.find({ student: studentId })
            .populate({
                path: "event",
                select: "title date",
            })
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: feedbackList.length,
            feedback: feedbackList,
        });
    } catch (error) {
        console.error("Get my feedback error:", error);
        res.status(500).json({
            success: false,
            message: "Server error while fetching your feedback",
            error: error.message,
        });
    }
};

module.exports = {
    submitFeedback,
    getEventFeedback,
    getMyFeedback,
};
