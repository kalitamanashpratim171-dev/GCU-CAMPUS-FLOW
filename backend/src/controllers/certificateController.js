const Certificate = require("../models/Certificate");
const Attendance = require("../models/Attendance");
const Event = require("../models/Event");

// @desc    Generate certificate for a student
// @route   POST /api/certificates/generate
// @access  Organizer, Admin
const generateCertificate = async (req, res) => {
    try {
        const { eventId, studentId, type } = req.body;
        const certType = type || "PARTICIPATION";

        if (!eventId || !studentId) {
            return res.status(400).json({
                success: false,
                message: "Event ID and Student ID are required",
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

        if (event.organizer.toString() !== req.user._id.toString() && req.user.role !== "admin") {
            return res.status(403).json({
                success: false,
                message: "Not authorized to generate certificates for this event",
            });
        }

        // Optional logic: Only allow generation if event is COMPLETED, though maybe an organizer wants to issue early.
        // We'll enforce that we need at least attendance.

        // 2. Verify Attendance
        const attendance = await Attendance.findOne({
            event: eventId,
            student: studentId,
            status: "PRESENT",
        });

        if (!attendance) {
            return res.status(400).json({
                success: false,
                message: "Cannot issue certificate. Student attendance not found or not marked present.",
            });
        }

        // 3. Check for existing certificate
        const existingCert = await Certificate.findOne({
            event: eventId,
            student: studentId,
            certificateType: certType,
        });

        if (existingCert) {
            return res.status(409).json({
                success: false,
                message: `Student already has a ${certType} certificate for this event`,
                certificate: existingCert,
            });
        }

        // 4. Create Certificate
        // At this stage, we are just creating the data record. A separate process or lambda could generate the actual PDF
        // and populate pdfUrl. Or the frontend can generate the PDF dynamically based on this data.
        const certificate = await Certificate.create({
            event: eventId,
            student: studentId,
            attendance: attendance._id,
            certificateType: certType,
        });

        res.status(201).json({
            success: true,
            message: "Certificate generated successfully",
            certificate,
        });
    } catch (error) {
        console.error("Generate certificate error:", error);
        res.status(500).json({
            success: false,
            message: "Server error while generating certificate",
            error: error.message,
        });
    }
};

// @desc    Get my certificates
// @route   GET /api/certificates/my-certificates
// @access  Authenticated User
const getMyCertificates = async (req, res) => {
    try {
        const studentId = req.user._id;

        const certificates = await Certificate.find({ student: studentId })
            .populate({
                path: "event",
                select: "title date category banner",
            })
            .sort({ issueDate: -1 });

        res.status(200).json({
            success: true,
            count: certificates.length,
            certificates,
        });
    } catch (error) {
        console.error("Get my certificates error:", error);
        res.status(500).json({
            success: false,
            message: "Server error while fetching your certificates",
            error: error.message,
        });
    }
};

// @desc    Verify a certificate
// @route   GET /api/certificates/verify/:token
// @access  Public
const verifyCertificate = async (req, res) => {
    try {
        const { token } = req.params;

        const certificate = await Certificate.findOne({ verificationToken: token })
            .populate("student", "name studentId")
            .populate("event", "title date category organizer")
            .populate({
                path: "event",
                populate: {
                    path: "organizer",
                    select: "name",
                }
            });

        if (!certificate) {
            return res.status(404).json({
                success: false,
                message: "Certificate not found or invalid token",
            });
        }

        if (certificate.status === "REVOKED") {
            return res.status(400).json({
                success: false,
                message: "This certificate has been revoked",
            });
        }

        res.status(200).json({
            success: true,
            message: "Certificate verified successfully",
            certificate,
        });
    } catch (error) {
        console.error("Verify certificate error:", error);
        res.status(500).json({
            success: false,
            message: "Server error while verifying certificate",
            error: error.message,
        });
    }
};

module.exports = {
    generateCertificate,
    getMyCertificates,
    verifyCertificate,
};
