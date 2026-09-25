const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
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
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5,
        },
        organizationRating: {
            type: Number,
            min: 1,
            max: 5,
        },
        speakerRating: {
            type: Number,
            min: 1,
            max: 5,
        },
        venueRating: {
            type: Number,
            min: 1,
            max: 5,
        },
        comment: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

// One feedback submission per student per event
feedbackSchema.index({ event: 1, student: 1 }, { unique: true });

module.exports = mongoose.model("Feedback", feedbackSchema);
