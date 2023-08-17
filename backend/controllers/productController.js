import Product from "../models/productModel.js";

//Create Product -- Admin
const createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};

//Get all products
const getAllProducts = async (req, res) => {
  const product = await Product.find();
  res.status(200).json({
    success: true,
    product,
  });
};

// Update product -- Admin
const updateProduct = async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: true,
  });

  res.status(200).json({
    success: true,
    product,
  });
};

//Delete Product --Admin
const deleteProduct = async (req, res, next) => {
  const product = Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  await product.findOneAndRemove();

  res.status(200).json({
    success: true,
    message: "Product deleted Successfully",
  });
};

//Get single product
const getSingleProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  res.status(200).json({
    success: true,
    product,
  });
};

export {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
};
