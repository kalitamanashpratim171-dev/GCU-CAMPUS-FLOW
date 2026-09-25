const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

const User = require("../models/User");

dotenv.config();

const seed = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash("Password@123", salt);

        // Seed Organizer
        await User.create({
            name: "Dr. Chinmoy (Faculty)",
            email: "chinmoykk2@gmail.com", // Used by user in screenshot
            password: password,
            role: "organizer",
            employeeId: "GCU-ORG-001",
            isActive: true,
        });

        // Seed Student
        await User.create({
            name: "Ananya Sharma",
            email: "student@gcu.ac.in",
            password: password,
            role: "student",
            studentId: "GCU/22/0481",
            isActive: true,
        });

        console.log("Seeded test users (chinmoykk2@gmail.com as organizer, student@gcu.ac.in as student) with password: Password@123");
        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

seed();
