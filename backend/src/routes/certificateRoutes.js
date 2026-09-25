const express = require("express");

const {
    generateCertificate,
    getMyCertificates,
    verifyCertificate,
} = require("../controllers/certificateController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

const router = express.Router();


// Verify certificate - Public endpoint
router.get(
    "/verify/:token",
    verifyCertificate
);

// Get my certificates
router.get(
    "/my-certificates",
    protect,
    getMyCertificates
);

// Generate certificate
router.post(
    "/generate",
    protect,
    authorize("organizer", "admin"),
    generateCertificate
);

module.exports = router;
