const express = require("express");

const {
    createVenue,
    getVenues,
    updateVenue,
    deactivateVenue,
} = require("../controllers/venueController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

const router = express.Router();

// Get venues
router.get(
    "/",
    protect,
    getVenues
);

// Create venue - Admin only
router.post(
    "/",
    protect,
    authorize("admin"),
    createVenue
);

// Update venue - Admin only
router.put(
    "/:id",
    protect,
    authorize("admin"),
    updateVenue
);

// Deactivate venue - Admin only
router.patch(
    "/:id/deactivate",
    protect,
    authorize("admin"),
    deactivateVenue
);

module.exports = router;
