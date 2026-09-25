const Department = require("../models/Department");

// @desc    Create a department
// @route   POST /api/departments
// @access  Admin
const createDepartment = async (req, res) => {
    try {
        const {
            name,
            code,
            description,
            head,
        } = req.body;

        // 1. Validate required fields
        if (!name || !code) {
            return res.status(400).json({
                success: false,
                message: "Department name and code are required",
            });
        }

        // 2. Check duplicate department name
        const existingName = await Department.findOne({
            name: name.trim(),
        });

        if (existingName) {
            return res.status(409).json({
                success: false,
                message: "A department with this name already exists",
            });
        }

        // 3. Check duplicate department code
        const existingCode = await Department.findOne({
            code: code.toUpperCase().trim(),
        });

        if (existingCode) {
            return res.status(409).json({
                success: false,
                message: "A department with this code already exists",
            });
        }

        // 4. Create department
        const department = await Department.create({
            name: name.trim(),
            code: code.toUpperCase().trim(),
            description: description || "",
            head: head || null,
        });

        res.status(201).json({
            success: true,
            message: "Department created successfully",
            department,
        });
    } catch (error) {
        console.error("Create department error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while creating department",
            error: error.message,
        });
    }
};

// @desc    Get all departments
// @route   GET /api/departments
// @access  Authenticated
const getDepartments = async (req, res) => {
    try {
        const departments = await Department.find()
            .populate("head", "name email role")
            .sort({ name: 1 });

        res.status(200).json({
            success: true,
            count: departments.length,
            departments,
        });
    } catch (error) {
        console.error("Get departments error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while fetching departments",
            error: error.message,
        });
    }
};

module.exports = {
    createDepartment,
    getDepartments,
};