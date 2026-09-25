const Event = require("../models/Event");

// @desc    Create an event
// @route   POST /api/events
// @access  Organizer, Admin
const createEvent = async (req, res) => {
    try {
        const {
            title,
            description,
            category,
            department,
            venue,
            date,
            startTime,
            endTime,
            registrationDeadline,
            maxParticipants,
            banner,
            rules,
        } = req.body;

        // 1. Validate required fields (department & venue are optional)
        if (
            !title ||
            !description ||
            !category ||
            !date ||
            !startTime ||
            !endTime ||
            !registrationDeadline ||
            !maxParticipants
        ) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields: title, description, category, date, startTime, endTime, registrationDeadline, maxParticipants",
            });
        }

        // 2. Create event
        // The organizer is the currently logged-in user
        const event = await Event.create({
            title: title.trim(),
            description: description.trim(),
            category: category.trim(),
            organizer: req.user._id,
            department,
            venue: venue || null,
            date,
            startTime,
            endTime,
            registrationDeadline,
            maxParticipants: Number(maxParticipants),
            banner: banner || "",
            status: "DRAFT", // New events start as DRAFT
            rules: rules || [],
        });

        res.status(201).json({
            success: true,
            message: "Event created successfully as DRAFT",
            event,
        });
    } catch (error) {
        console.error("Create event error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while creating event",
            error: error.message,
        });
    }
};

// @desc    Get all events
// @route   GET /api/events
// @access  Authenticated / Public depending on route design. Let's make it Authenticated for now.
const getEvents = async (req, res) => {
    try {
        const { status, category, department } = req.query;

        // Build query filter
        let query = {};
        if (status) query.status = status;
        if (category) query.category = category;
        if (department) query.department = department;

        const events = await Event.find(query)
            .populate("organizer", "name email")
            .populate("department", "name code")
            .populate("venue", "name building room")
            .sort({ date: 1 });

        res.status(200).json({
            success: true,
            count: events.length,
            events,
        });
    } catch (error) {
        console.error("Get events error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while fetching events",
            error: error.message,
        });
    }
};

// @desc    Get single event by ID
// @route   GET /api/events/:id
// @access  Authenticated
const getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id)
            .populate("organizer", "name email")
            .populate("department", "name code")
            .populate("venue", "name building room");

        if (!event) {
            return res.status(404).json({
                success: false,
                message: "Event not found",
            });
        }

        res.status(200).json({
            success: true,
            event,
        });
    } catch (error) {
        console.error("Get event by id error:", error);
        res.status(500).json({
            success: false,
            message: "Server error while fetching event",
            error: error.message,
        });
    }
};

// @desc    Submit event for approval
// @route   PATCH /api/events/:id/submit
// @access  Organizer (owner) or Admin
const submitEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);

        if (!event) {
            return res.status(404).json({
                success: false,
                message: "Event not found",
            });
        }

        // Authorization check: User must be admin or the organizer of the event
        if (event.organizer.toString() !== req.user._id.toString() && req.user.role !== "admin") {
            return res.status(403).json({
                success: false,
                message: "Not authorized to submit this event",
            });
        }

        // Validate status progression
        if (event.status !== "DRAFT" && event.status !== "REJECTED") {
            return res.status(400).json({
                success: false,
                message: "Only DRAFT or REJECTED events can be submitted for approval",
            });
        }

        event.status = "PENDING_APPROVAL";
        event.rejectionReason = ""; // Clear any previous rejection reason
        await event.save();

        res.status(200).json({
            success: true,
            message: "Event submitted for approval",
            event,
        });
    } catch (error) {
        console.error("Submit event error:", error);
        res.status(500).json({
            success: false,
            message: "Server error while submitting event",
            error: error.message,
        });
    }
};

// @desc    Approve event
// @route   PATCH /api/events/:id/approve
// @access  Admin
const approveEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);

        if (!event) {
            return res.status(404).json({
                success: false,
                message: "Event not found",
            });
        }

        if (event.status !== "PENDING_APPROVAL") {
            return res.status(400).json({
                success: false,
                message: "Event must be in PENDING_APPROVAL status to be approved",
            });
        }

        event.status = "APPROVED";
        await event.save();

        res.status(200).json({
            success: true,
            message: "Event approved successfully",
            event,
        });
    } catch (error) {
        console.error("Approve event error:", error);
        res.status(500).json({
            success: false,
            message: "Server error while approving event",
            error: error.message,
        });
    }
};

// @desc    Reject event
// @route   PATCH /api/events/:id/reject
// @access  Admin
const rejectEvent = async (req, res) => {
    try {
        const { reason } = req.body;

        if (!reason || reason.trim() === "") {
            return res.status(400).json({
                success: false,
                message: "Rejection reason is required",
            });
        }

        const event = await Event.findById(req.params.id);

        if (!event) {
            return res.status(404).json({
                success: false,
                message: "Event not found",
            });
        }

        if (event.status !== "PENDING_APPROVAL") {
            return res.status(400).json({
                success: false,
                message: "Event must be in PENDING_APPROVAL status to be rejected",
            });
        }

        event.status = "REJECTED";
        event.rejectionReason = reason.trim();
        await event.save();

        res.status(200).json({
            success: true,
            message: "Event rejected",
            event,
        });
    } catch (error) {
        console.error("Reject event error:", error);
        res.status(500).json({
            success: false,
            message: "Server error while rejecting event",
            error: error.message,
        });
    }
};

// @desc    Publish event
// @route   PATCH /api/events/:id/publish
// @access  Organizer (owner) or Admin
const publishEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);

        if (!event) {
            return res.status(404).json({
                success: false,
                message: "Event not found",
            });
        }

        // Authorization check: User must be admin or the organizer of the event
        if (event.organizer.toString() !== req.user._id.toString() && req.user.role !== "admin") {
            return res.status(403).json({
                success: false,
                message: "Not authorized to publish this event",
            });
        }

        if (event.status !== "APPROVED") {
            return res.status(400).json({
                success: false,
                message: "Event must be APPROVED before it can be published",
            });
        }

        event.status = "PUBLISHED";
        await event.save();

        res.status(200).json({
            success: true,
            message: "Event published successfully",
            event,
        });
    } catch (error) {
        console.error("Publish event error:", error);
        res.status(500).json({
            success: false,
            message: "Server error while publishing event",
            error: error.message,
        });
    }
};

module.exports = {
    createEvent,
    getEvents,
    getEventById,
    submitEvent,
    approveEvent,
    rejectEvent,
    publishEvent,
};
