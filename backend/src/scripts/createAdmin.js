const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

const User = require("../models/User");

dotenv.config();

const createAdmin = async () => {
    try {
        // 1. Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected.");

        // 2. Admin details
        const adminEmail = "admin@gcu.ac.in";
        const adminPassword = "Admin@12345";

        // 3. Check whether admin already exists
        const existingAdmin = await User.findOne({
            email: adminEmail,
        });

        if (existingAdmin) {
            console.log("Admin account already exists.");
            process.exit(0);
        }

        // 4. Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(
            adminPassword,
            salt
        );

        // 5. Create admin
        const admin = await User.create({
            name: "GCU Administrator",
            email: adminEmail,
            password: hashedPassword,
            role: "admin",
            employeeId: "GCU-ADMIN-001",
            phone: "9876543200",
            isActive: true,
        });

        console.log("Admin account created successfully.");
        console.log("Email:", admin.email);
        console.log("Role:", admin.role);

        process.exit(0);
    } catch (error) {
        console.error("Error creating admin:", error.message);
        process.exit(1);
    }
};

createAdmin();