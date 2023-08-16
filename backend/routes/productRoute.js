import express from "express"
// import router  from "express"
import getAllProducts from "../controllers/productController.js";

const router = express.Router()

router.route('/products').get(getAllProducts)

export default router;