const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String,
            required: true,
            trim: true,
        },
        organizer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        department: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Department",
            required: true,
        },
        venue: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Venue",
            default: null,
        },
        date: {
            type: Date,
            required: true,
        },
        startTime: {
            type: String, // e.g., "10:00"
            required: true,
        },
        endTime: {
            type: String, // e.g., "12:00"
            required: true,
        },
        registrationDeadline: {
            type: Date,
            required: true,
        },
        maxParticipants: {
            type: Number,
            required: true,
            min: [1, "Max participants must be at least 1"],
        },
        banner: {
            type: String,
            default: "",
        },
        status: {
            type: String,
            enum: [
                "DRAFT",
                "PENDING_APPROVAL",
                "APPROVED",
                "REJECTED",
                "PUBLISHED",
                "ONGOING",
                "COMPLETED",
                "CANCELLED",
            ],
            default: "DRAFT",
            required: true,
        },
        rules: {
            type: [String],
            default: [],
        },
        resources: {
            type: [String], // Array of URLs or references, for simplicity starting with Strings
            default: [],
        },
        rejectionReason: {
            type: String,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Event", eventSchema);
