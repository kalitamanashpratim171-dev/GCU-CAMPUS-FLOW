const express = require("express");

const {
    getMyNotifications,
    markAsRead,
    markAllAsRead,
    sendSystemNotification,
} = require("../controllers/notificationController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

const router = express.Router();

// Get my notifications
router.get(
    "/",
    protect,
    getMyNotifications
);

// Mark all as read
router.patch(
    "/read-all",
    protect,
    markAllAsRead
);

// Mark a specific notification as read
router.patch(
    "/:id/read",
    protect,
    markAsRead
);

// Send system notification - Admin only
router.post(
    "/system",
    protect,
    authorize("admin"),
    sendSystemNotification
);

module.exports = router;
