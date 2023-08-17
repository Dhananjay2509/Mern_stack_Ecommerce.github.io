import express from "express"
// import router  from "express"
import {getAllProducts, createProduct, updateProduct} from "../controllers/productController.js";

const router = express.Router()

router.route('/products').get(getAllProducts)
router.route('/products/new').post(createProduct)
router.route('/products/:id').put(updateProduct)

export default router;