import express from "express";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  createProductReview,
  getSingleProductReviews,
  deleteProductReview,
} from "../controllers/productController.js";
import {
  isAuthenticatedUser,
  authorizeRoles,
} from "../middleware/authentication.js";

const router = express.Router();

router.route("/products").get(getAllProducts);

router
  .route("/admin/products/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

router
  .route("/admin/products/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

router.route("/review").put(isAuthenticatedUser, createProductReview);

router.route("/products/:id").get(getSingleProduct);

router
  .route("/reviews")
  .get(getSingleProductReviews)
  .delete(isAuthenticatedUser, deleteProductReview);

export default router;
