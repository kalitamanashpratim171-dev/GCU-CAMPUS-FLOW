const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
    {
        recipient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        type: {
            type: String,
            enum: [
                "SYSTEM",
                "EVENT_APPROVAL",
                "EVENT_UPDATE",
                "REGISTRATION",
                "ATTENDANCE",
                "CERTIFICATE",
                "ALERT",
            ],
            default: "SYSTEM",
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        message: {
            type: String,
            required: true,
            trim: true,
        },
        relatedEvent: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Event",
            default: null,
        },
        isRead: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Notification", notificationSchema);
