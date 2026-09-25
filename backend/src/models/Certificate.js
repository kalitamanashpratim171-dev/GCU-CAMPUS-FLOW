const mongoose = require("mongoose");
const crypto = require("crypto");

const certificateSchema = new mongoose.Schema(
    {
        certificateId: {
            type: String,
            required: true,
            unique: true,
        },
        event: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Event",
            required: true,
        },
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        attendance: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Attendance",
            required: true,
        },
        certificateType: {
            type: String,
            default: "PARTICIPATION",
            enum: ["PARTICIPATION", "WINNER", "ORGANIZER", "VOLUNTEER"],
        },
        issueDate: {
            type: Date,
            default: Date.now,
        },
        pdfUrl: {
            type: String, // Store URL if uploaded to cloud storage like AWS S3 or Cloudinary
            default: "",
        },
        verificationToken: {
            type: String,
            unique: true,
        },
        status: {
            type: String,
            enum: ["ISSUED", "REVOKED"],
            default: "ISSUED",
        },
    },
    {
        timestamps: true,
    }
);

// One certificate per student per event per type
certificateSchema.index({ event: 1, student: 1, certificateType: 1 }, { unique: true });

// Pre-save hook to generate unique IDs
certificateSchema.pre("save", function (next) {
    if (!this.certificateId) {
        // e.g. GCU-CERT-2026-<random>
        const randomString = crypto.randomBytes(4).toString("hex").toUpperCase();
        const year = new Date().getFullYear();
        this.certificateId = `GCU-CERT-${year}-${randomString}`;
    }

    if (!this.verificationToken) {
        this.verificationToken = crypto.randomBytes(32).toString("hex");
    }
    next();
});

module.exports = mongoose.model("Certificate", certificateSchema);
