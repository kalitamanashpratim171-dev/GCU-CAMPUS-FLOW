const Registration = require("../models/Registration");
const Event = require("../models/Event");

// @desc    Register for an event
// @route   POST /api/registrations/:eventId
// @access  Authenticated User (implicitly Student)
const registerForEvent = async (req, res) => {
    try {
        const eventId = req.params.eventId;
        const studentId = req.user._id;

        // 1. Check if event exists
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({
                success: false,
                message: "Event not found",
            });
        }

        // 2. Check event status
        if (event.status !== "PUBLISHED" && event.status !== "ONGOING") {
            return res.status(400).json({
                success: false,
                message: "This event is not open for registration",
            });
        }

        // 3. Check registration deadline
        if (new Date() > new Date(event.registrationDeadline)) {
            return res.status(400).json({
                success: false,
                message: "Registration deadline has passed",
            });
        }

        // 4. Check capacity
        const currentRegistrationsCount = await Registration.countDocuments({
            event: eventId,
            status: "REGISTERED",
        });

        if (currentRegistrationsCount >= event.maxParticipants) {
            return res.status(400).json({
                success: false,
                message: "Event capacity has been reached",
            });
        }

        // 5. Check if student already registered
        const existingRegistration = await Registration.findOne({
            event: eventId,
            student: studentId,
        });

        if (existingRegistration) {
            return res.status(409).json({
                success: false,
                message: "You are already registered for this event",
            });
        }

        // 6. Create registration
        const registration = await Registration.create({
            event: eventId,
            student: studentId,
            status: "REGISTERED",
        });

        res.status(201).json({
            success: true,
            message: "Successfully registered for the event",
            registration,
        });
    } catch (error) {
        console.error("Register for event error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while registering for event",
            error: error.message,
        });
    }
};

// @desc    Get registrations of logged-in student
// @route   GET /api/registrations/my-registrations
// @access  Authenticated User
const getMyRegistrations = async (req, res) => {
    try {
        const studentId = req.user._id;

        const registrations = await Registration.find({ student: studentId })
            .populate({
                path: "event",
                select: "title date startTime endTime status venue banner",
                populate: {
                    path: "venue",
                    select: "name building room",
                },
            })
            .sort({ registrationDate: -1 });

        res.status(200).json({
            success: true,
            count: registrations.length,
            registrations,
        });
    } catch (error) {
        console.error("Get my registrations error:", error);
        res.status(500).json({
            success: false,
            message: "Server error while fetching your registrations",
            error: error.message,
        });
    }
};

// @desc    Get registrations for a specific event
// @route   GET /api/registrations/event/:eventId
// @access  Organizer, Admin
const getEventRegistrations = async (req, res) => {
    try {
        const eventId = req.params.eventId;

        // Check event access if requested by organizer (could add logic to only let the event owner view it)
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({
                success: false,
                message: "Event not found",
            });
        }

        // Check if organizer owns the event, or if user is admin
        if (event.organizer.toString() !== req.user._id.toString() && req.user.role !== "admin") {
            return res.status(403).json({
                success: false,
                message: "Not authorized to view registrations for this event",
            });
        }

        const registrations = await Registration.find({ event: eventId })
            .populate("student", "name email studentId")
            .sort({ registrationDate: 1 });

        res.status(200).json({
            success: true,
            count: registrations.length,
            registrations,
        });
    } catch (error) {
        console.error("Get event registrations error:", error);
        res.status(500).json({
            success: false,
            message: "Server error while fetching event registrations",
            error: error.message,
        });
    }
};

module.exports = {
    registerForEvent,
    getMyRegistrations,
    getEventRegistrations,
};
