const express = require("express");

const {
    registerUser,
    loginUser,
    getMe,
    testRoleAccess,
} = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

const router = express.Router();

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Authenticated route
router.get("/me", protect, getMe);

// Student-only test route
router.get(
    "/test-student",
    protect,
    authorize("student"),
    testRoleAccess
);

// Organizer-only test route
router.get(
    "/test-organizer",
    protect,
    authorize("organizer"),
    testRoleAccess
);

// Admin-only test route
router.get(
    "/test-admin",
    protect,
    authorize("admin"),
    testRoleAccess
);

module.exports = router;