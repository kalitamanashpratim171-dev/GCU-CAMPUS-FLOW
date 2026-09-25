const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
    {
        event: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Event",
            required: true,
        },
        registration: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Registration",
            required: true,
        },
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        scannedAt: {
            type: Date,
            default: Date.now,
        },
        scannedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        status: {
            type: String,
            enum: ["PRESENT"],
            default: "PRESENT",
        }
    },
    {
        timestamps: true,
    }
);

// One attendance record per registration
attendanceSchema.index({ registration: 1 }, { unique: true });

// Alternatively, ensure one student can't be marked present multiple times for the same event
attendanceSchema.index({ event: 1, student: 1 }, { unique: true });

module.exports = mongoose.model("Attendance", attendanceSchema);
