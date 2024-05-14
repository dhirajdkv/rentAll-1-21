const express = require("express");
const {
  registerUser,
  loginUser,
  logoutuser,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updateUserPassword,
  updateUserProfile,
  getAllUsers,
  getSingleUser,
  updateUserRole,
  verifyUser,
} = require("../controllers/userController.js");
const { isAuthenticatedUser, authorizeRole } = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/logout").get(logoutuser);

module.exports = router;
