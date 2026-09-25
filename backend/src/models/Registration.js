const mongoose = require("mongoose");
const crypto = require("crypto");

const registrationSchema = new mongoose.Schema(
    {
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
        registrationDate: {
            type: Date,
            default: Date.now,
        },
        status: {
            type: String,
            enum: ["REGISTERED", "CANCELLED"],
            default: "REGISTERED",
        },
        qrToken: {
            type: String,
            unique: true,
        },
        qrGeneratedAt: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);

// Ensure one student cannot register twice for the same active event
registrationSchema.index({ event: 1, student: 1 }, { unique: true });

// Pre-save hook to generate QR token if not exists
registrationSchema.pre("save", function (next) {
    if (!this.qrToken) {
        // Generate a random token for the QR code
        this.qrToken = crypto.randomBytes(32).toString("hex");
        this.qrGeneratedAt = Date.now();
    }
    next();
});

module.exports = mongoose.model("Registration", registrationSchema);
