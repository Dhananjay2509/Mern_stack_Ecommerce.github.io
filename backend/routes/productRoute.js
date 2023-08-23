import express from "express"
// import router  from "express"
import {getAllProducts, createProduct, updateProduct, deleteProduct, getSingleProduct} from "../controllers/productController.js";
import isAuthenticatedUser from "../middleware/authentication.js";

const router = express.Router()

router.route('/products').get( isAuthenticatedUser, getAllProducts)
router.route('/products/new').post(createProduct)
router.route('/products/:id').put(updateProduct).delete(deleteProduct).get(getSingleProduct)

export default router;