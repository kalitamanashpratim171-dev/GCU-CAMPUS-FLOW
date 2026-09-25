const Venue = require("../models/Venue");

// @desc    Create a venue
// @route   POST /api/venues
// @access  Admin
const createVenue = async (req, res) => {
    try {
        const {
            name,
            building,
            room,
            capacity,
            description,
            facilities,
        } = req.body;

        // 1. Validate required fields
        if (!name || !building || !capacity) {
            return res.status(400).json({
                success: false,
                message: "Venue name, building, and capacity are required",
            });
        }

        // Capacity validation
        if (capacity < 1) {
            return res.status(400).json({
                success: false,
                message: "Capacity must be at least 1",
            });
        }

        // 2. Check duplicate venue name
        const existingName = await Venue.findOne({
            name: name.trim(),
        });

        if (existingName) {
            return res.status(409).json({
                success: false,
                message: "A venue with this name already exists",
            });
        }

        // 3. Create venue
        const venue = await Venue.create({
            name: name.trim(),
            building: building.trim(),
            room: room ? room.trim() : "",
            capacity: Number(capacity),
            description: description || "",
            facilities: facilities || [],
        });

        res.status(201).json({
            success: true,
            message: "Venue created successfully",
            venue,
        });
    } catch (error) {
        console.error("Create venue error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while creating venue",
            error: error.message,
        });
    }
};

// @desc    Get all venues
// @route   GET /api/venues
// @access  Authenticated
const getVenues = async (req, res) => {
    try {
        // Find only active venues, or allow admin to see all by passing query params?
        // simple get all venues
        const { all } = req.query;
        let query = {};
        if (all !== "true") {
            query.isActive = true;
        }

        const venues = await Venue.find(query).sort({ name: 1 });

        res.status(200).json({
            success: true,
            count: venues.length,
            venues,
        });
    } catch (error) {
        console.error("Get venues error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while fetching venues",
            error: error.message,
        });
    }
};

// @desc    Update a venue
// @route   PUT /api/venues/:id
// @access  Admin
const updateVenue = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        // Capacity validation if provided
        if (updates.capacity !== undefined && updates.capacity < 1) {
            return res.status(400).json({
                success: false,
                message: "Capacity must be at least 1",
            });
        }

        // Duplicate name check if name is updated
        if (updates.name) {
            updates.name = updates.name.trim();
            const existingName = await Venue.findOne({
                name: updates.name,
                _id: { $ne: id },
            });

            if (existingName) {
                return res.status(409).json({
                    success: false,
                    message: "A venue with this name already exists",
                });
            }
        }

        const venue = await Venue.findByIdAndUpdate(
            id,
            { $set: updates },
            { new: true, runValidators: true }
        );

        if (!venue) {
            return res.status(404).json({
                success: false,
                message: "Venue not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Venue updated successfully",
            venue,
        });
    } catch (error) {
        console.error("Update venue error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while updating venue",
            error: error.message,
        });
    }
};

// @desc    Deactivate a venue
// @route   PATCH /api/venues/:id/deactivate
// @access  Admin
const deactivateVenue = async (req, res) => {
    try {
        const { id } = req.params;
        const venue = await Venue.findByIdAndUpdate(
            id,
            { isActive: false },
            { new: true }
        );

        if (!venue) {
            return res.status(404).json({
                success: false,
                message: "Venue not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Venue deactivated successfully",
            venue,
        });
    } catch (error) {
        console.error("Deactivate venue error:", error);

        res.status(500).json({
            success: false,
            message: "Server error while deactivating venue",
            error: error.message,
        });
    }
};

module.exports = {
    createVenue,
    getVenues,
    updateVenue,
    deactivateVenue,
};
