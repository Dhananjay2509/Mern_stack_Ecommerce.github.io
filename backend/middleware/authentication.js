import ErrorHandler from "../utils/errorhandler.js";
import catchAsyncError from "./catchAsyncError.js";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Please Login to access this account", 401));
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decodedData.id);
  next();
});

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role: ${req.user.role} is not allowed to access this role`,
          403
        )
      );
    }

    next();
  };
};

export { isAuthenticatedUser, authorizeRoles };
