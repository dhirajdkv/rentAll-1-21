const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ContactUs = require("../models/contactUsModel");

exports.createMessage = catchAsyncErrors(async (req, res, next) => {
  const { message } = req.body;
  const { user } = req;
  if (!message) {
    return res.status(400).json({ error: "Message is a required field." });
  }
  try {
    const newMessage = new ContactUs({
      user: user._id,
      name: user.name,
      email: user.email,
      message,
    });
    const savedMessage = await newMessage.save();
    res.status(201).json({
      success: true,
      message: "Message created successfully.",
      data: savedMessage,
    });
  } catch (error) {
    console.error("Error creating message:", error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});
exports.getAllMessages = catchAsyncErrors(async (req, res, next) => {
  try {
    const messages = await ContactUs.find();
    res.status(200).json({
      success: true,
      data: messages,
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});
