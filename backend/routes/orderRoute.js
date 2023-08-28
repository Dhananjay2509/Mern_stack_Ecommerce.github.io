import express from "express";
import {newOrder} from "../controllers/orderController.js";
import {
  isAuthenticatedUser,
  authorizeRoles,
} from "../middleware/authentication.js";
const router = express.Router();

router.route("/order/new").post(isAuthenticatedUser,newOrder);

export default router;

