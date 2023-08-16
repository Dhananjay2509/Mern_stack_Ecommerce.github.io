import express from "express"
import router  from "express"
import getAllProducts from "../controllers/productController";

router.route('/products').get(getAllProducts)

export default router;