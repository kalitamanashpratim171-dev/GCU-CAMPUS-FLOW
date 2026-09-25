require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./src/models/User');

const seedOrganizer = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/GCU-Campus-Flow');
        console.log('MongoDB connected for seeding');

        const email = 'dr.barman@gcu.edu.in';

        // Remove existing if any
        await User.deleteOne({ email });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('gcu2025pass', salt);

        const organizer = await User.create({
            name: 'Dr. Pranjal Barman',
            email: email,
            password: hashedPassword,
            role: 'organizer',
            employeeId: 'EMP-CSE-001',
            phone: '+919999999999'
        });

        console.log('Organizer seeded successfully:', organizer.email);
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedOrganizer();
