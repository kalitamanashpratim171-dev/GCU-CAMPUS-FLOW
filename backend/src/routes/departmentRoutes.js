const express = require("express");

const {
    createDepartment,
    getDepartments,
} = require("../controllers/departmentController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

const router = express.Router();

// Get all departments
router.get(
    "/",
    protect,
    getDepartments
);

// Create department - Admin only
router.post(
    "/",
    protect,
    authorize("admin"),
    createDepartment
);

module.exports = router;