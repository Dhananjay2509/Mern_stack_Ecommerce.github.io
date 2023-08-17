import Product from "../models/productModel.js"

//Create Product -- Admin
const createProduct= async (req,res,next)=>{
   const product = await Product.create(req.body);
   res.status(201).json({
    success:true,
    product
   })
}

//Get all products 
const getAllProducts = async (req, res) => {
  const product= await Product.find();
  res.status(200).json({
    success:true,
    product
   })
};

// Update product -- Admin

export { getAllProducts, createProduct};
