const User = require("../models/User");
const Department = require("../models/Department");
const Event = require("../models/Event");
const Registration = require("../models/Registration");
const Attendance = require("../models/Attendance");
const Certificate = require("../models/Certificate");
const Feedback = require("../models/Feedback");
const mongoose = require("mongoose");

// @desc    Get global statistics for Admin Dashboard
// @route   GET /api/analytics/admin
// @access  Admin
const getAdminDashboardStats = async (req, res) => {
    try {
        const [
            totalUsers,
            totalStudents,
            totalOrganizers,
            totalAdmins,
            totalDepartments,
            totalEvents,
            activeEvents,
            totalRegistrations,
            totalCertificates,
        ] = await Promise.all([
            User.countDocuments(),
            User.countDocuments({ role: "student" }),
            User.countDocuments({ role: "organizer" }),
            User.countDocuments({ role: "admin" }),
            Department.countDocuments(),
            Event.countDocuments(),
            Event.countDocuments({ status: { $in: ["PUBLISHED", "ONGOING"] } }),
            Registration.countDocuments(),
            Certificate.countDocuments(),
        ]);

        // Aggregate events by status
        const eventsByStatus = await Event.aggregate([
            { $group: { _id: "$status", count: { $sum: 1 } } }
        ]);

        res.status(200).json({
            success: true,
            stats: {
                users: {
                    total: totalUsers,
                    students: totalStudents,
                    organizers: totalOrganizers,
                    admins: totalAdmins,
                },
                departments: totalDepartments,
                events: {
                    total: totalEvents,
                    active: activeEvents,
                    byStatus: eventsByStatus,
                },
                registrations: totalRegistrations,
                certificates: totalCertificates,
            },
        });
    } catch (error) {
        console.error("Admin dashboard stats error:", error);
        res.status(500).json({
            success: false,
            message: "Server error while fetching analytics",
            error: error.message,
        });
    }
};

// @desc    Get statistics for Organizer Dashboard
// @route   GET /api/analytics/organizer
// @access  Organizer, Admin
const getOrganizerDashboardStats = async (req, res) => {
    try {
        const organizerId = req.user._id;

        const myEvents = await Event.find({ organizer: organizerId });
        const eventIds = myEvents.map((e) => e._id);

        const [
            totalRegistrations,
            totalAttendance,
            averageFeedback,
        ] = await Promise.all([
            Registration.countDocuments({ event: { $in: eventIds } }),
            Attendance.countDocuments({ event: { $in: eventIds } }),
            Feedback.aggregate([
                { $match: { event: { $in: eventIds } } },
                { $group: { _id: null, avgRating: { $avg: "$rating" } } }
            ]),
        ]);

        res.status(200).json({
            success: true,
            stats: {
                events: {
                    total: myEvents.length,
                    active: myEvents.filter((e) => e.status === "PUBLISHED" || e.status === "ONGOING").length,
                    pending: myEvents.filter((e) => e.status === "PENDING_APPROVAL").length,
                },
                engagement: {
                    registrations: totalRegistrations,
                    attendance: totalAttendance,
                    attendanceRate: totalRegistrations > 0 ? ((totalAttendance / totalRegistrations) * 100).toFixed(2) + "%" : "0%",
                },
                feedback: {
                    averageRating: averageFeedback.length > 0 ? averageFeedback[0].avgRating.toFixed(2) : 0,
                },
            },
        });
    } catch (error) {
        console.error("Organizer dashboard stats error:", error);
        res.status(500).json({
            success: false,
            message: "Server error while fetching analytics",
            error: error.message,
        });
    }
};

// @desc    Get detailed report for a specific event
// @route   GET /api/analytics/event/:eventId
// @access  Organizer, Admin
const getEventReport = async (req, res) => {
    try {
        const { eventId } = req.params;

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
                message: "Not authorized to view analytics for this event",
            });
        }

        const [
            registrations,
            attendance,
            certificates,
            feedbackAggregates,
        ] = await Promise.all([
            Registration.countDocuments({ event: eventId }),
            Attendance.countDocuments({ event: eventId }),
            Certificate.countDocuments({ event: eventId }),
            Feedback.aggregate([
                { $match: { event: new mongoose.Types.ObjectId(eventId) } },
                {
                    $group: {
                        _id: null,
                        totalReviews: { $sum: 1 },
                        avgOverall: { $avg: "$rating" },
                        avgOrganization: { $avg: "$organizationRating" },
                        avgSpeaker: { $avg: "$speakerRating" },
                        avgVenue: { $avg: "$venueRating" },
                    },
                },
            ]),
        ]);

        const feedbackData = feedbackAggregates.length > 0 ? feedbackAggregates[0] : {
            totalReviews: 0,
            avgOverall: 0,
            avgOrganization: 0,
            avgSpeaker: 0,
            avgVenue: 0,
        };

        res.status(200).json({
            success: true,
            report: {
                event: {
                    title: event.title,
                    status: event.status,
                    date: event.date,
                    capacity: event.maxParticipants,
                },
                metrics: {
                    reservationsMade: registrations,
                    availableSpots: event.maxParticipants - registrations,
                    fillRate: ((registrations / event.maxParticipants) * 100).toFixed(2) + "%",
                },
                performance: {
                    attended: attendance,
                    noShows: registrations - attendance,
                    attendanceRate: registrations > 0 ? ((attendance / registrations) * 100).toFixed(2) + "%" : "0%",
                    certificatesIssued: certificates,
                },
                satisfaction: {
                    totalResponses: feedbackData.totalReviews,
                    overallRating: feedbackData.avgOverall,
                    organizationRating: feedbackData.avgOrganization,
                    speakerRating: feedbackData.avgSpeaker,
                    venueRating: feedbackData.avgVenue,
                },
            },
        });
    } catch (error) {
        console.error("Get event report error:", error);
        res.status(500).json({
            success: false,
            message: "Server error while generating event report",
            error: error.message,
        });
    }
};

module.exports = {
    getAdminDashboardStats,
    getOrganizerDashboardStats,
    getEventReport,
};
