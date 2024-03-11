const express = require("express");
const { registerController, authController,loginController, verifyOtpController } = require("../controller/user");
const protect = require ("../middleware/authMiddleware");



router = express.Router();

router.post("/register", registerController);
router.post("/get-user", protect, authController);
router.post("/login", loginController);
router.post("/verifyotp", verifyOtpController);
module.exports = router;
