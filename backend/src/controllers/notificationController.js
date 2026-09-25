const Notification = require("../models/Notification");
const User = require("../models/User");

// @desc    Get my notifications
// @route   GET /api/notifications
// @access  Authenticated User
const getMyNotifications = async (req, res) => {
    try {
        const userId = req.user._id;

        const notifications = await Notification.find({ recipient: userId })
            .populate("relatedEvent", "title date")
            .sort({ createdAt: -1 });

        const unreadCount = await Notification.countDocuments({
            recipient: userId,
            isRead: false,
        });

        res.status(200).json({
            success: true,
            count: notifications.length,
            unreadCount,
            notifications,
        });
    } catch (error) {
        console.error("Get my notifications error:", error);
        res.status(500).json({
            success: false,
            message: "Server error while fetching notifications",
            error: error.message,
        });
    }
};

// @desc    Mark a notification as read
// @route   PATCH /api/notifications/:id/read
// @access  Authenticated User
const markAsRead = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user._id;

        const notification = await Notification.findOneAndUpdate(
            { _id: id, recipient: userId }, // Ensure the logged-in user owns this notification
            { isRead: true },
            { new: true }
        );

        if (!notification) {
            return res.status(404).json({
                success: false,
                message: "Notification not found or access denied",
            });
        }

        res.status(200).json({
            success: true,
            message: "Notification marked as read",
            notification,
        });
    } catch (error) {
        console.error("Mark notification as read error:", error);
        res.status(500).json({
            success: false,
            message: "Server error while updating notification",
            error: error.message,
        });
    }
};

// @desc    Mark all my notifications as read
// @route   PATCH /api/notifications/read-all
// @access  Authenticated User
const markAllAsRead = async (req, res) => {
    try {
        const userId = req.user._id;

        await Notification.updateMany(
            { recipient: userId, isRead: false },
            { $set: { isRead: true } }
        );

        res.status(200).json({
            success: true,
            message: "All notifications marked as read",
        });
    } catch (error) {
        console.error("Mark all notifications as read error:", error);
        res.status(500).json({
            success: false,
            message: "Server error while updating notifications",
            error: error.message,
        });
    }
};

// @desc    Send a system notification (e.g. to a specific user)
// @route   POST /api/notifications/system
// @access  Admin
const sendSystemNotification = async (req, res) => {
    try {
        const { recipientId, title, message } = req.body;

        if (!recipientId || !title || !message) {
            return res.status(400).json({
                success: false,
                message: "Recipient, title, and message are required",
            });
        }

        const user = await User.findById(recipientId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Recipient user not found",
            });
        }

        const notification = await Notification.create({
            recipient: recipientId,
            type: "SYSTEM",
            title: title.trim(),
            message: message.trim(),
        });

        res.status(201).json({
            success: true,
            message: "System notification sent",
            notification,
        });
    } catch (error) {
        console.error("Send system notification error:", error);
        res.status(500).json({
            success: false,
            message: "Server error while sending notification",
            error: error.message,
        });
    }
};

module.exports = {
    getMyNotifications,
    markAsRead,
    markAllAsRead,
    sendSystemNotification,
};
