const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apiFeatures");

// create product -- Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const uploadedFiles = req.files.images;
  const fileArray = Array.isArray(uploadedFiles)
    ? uploadedFiles
    : [uploadedFiles];
  const uploadedImages = [];
  for (const file of fileArray) {
    const fileUri = "ddblkdbd.jpg";
    uploadedImages.push({
      public_id: "abcd",
      url: "dkldbkd.jpg",
    });
  }
  const productData = {
    ...req.body,
    images: uploadedImages,
    user: req.user.id,
  };
  const product = await Product.create(productData);
  res.status(201).json({
    success: true,
    product,
  });
});

// Get All product
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  const productCount = await Product.countDocuments();
  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .condition();
  const products = await apiFeature.query;
  res.status(200).json({
    success: true,
    products,
    productCount,
  });
});

// Delete product --Admin
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }
  await product.deleteOne({ _id: req.params.id });

  res.status(200).json({
    success: true,
    Message: "product deleted successfully",
  });
});

// Get One product
exports.getProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }
  res.status(200).json({
    success: true,
    product,
  });
});
