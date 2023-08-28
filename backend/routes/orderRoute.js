import express from "express";
import {
  UpdateOrder,
  deleteOrder,
  getAllOrders,
  getSingleOrder,
  myOrders,
  newOrder,
} from "../controllers/orderController.js";
import {
  isAuthenticatedUser,
  authorizeRoles,
} from "../middleware/authentication.js";
const router = express.Router();

router.route("/order/new").post(isAuthenticatedUser, newOrder);

router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);

router.route("/orders/me").get(isAuthenticatedUser, myOrders);

router
  .route("/admin/orders")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);

router
  .route("/admin/order/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), UpdateOrder)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);

export default router;
