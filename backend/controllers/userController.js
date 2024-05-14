const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const cloudinary = require("cloudinary").v2;
const getDataUri = require("../utils/dataUri");

// Regiser a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message:
          "Email is already registered. Please use a different email address.",
      });
    }
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      verificationToken,
      verified: true,
      avatar: {
        public_id: "kdlkddd",
        url: "dkibdd.jpg",
      },
    });

    res.status(200).json({
      success: true,
      message: `${user.email} SignUp successfull!`,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

// logout
exports.logoutuser = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(0),
    httpOnly: true,
    sameSite: "None",
    secure: true,
  });
  res
    .status(200)
    .cookie("token", null, {
      httpOnly: true,
      expires: new Date(0),
      secure: true,
      sameSite: "None",
    })
    .json({
      success: true,
      message: "Logged Out",
    });
});
