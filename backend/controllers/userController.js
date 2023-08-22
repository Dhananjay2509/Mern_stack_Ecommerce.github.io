import ErrorHandler from "../utils/errorhandler";
import catchAsyncError from "../middleware/catchAsyncError";
import User from "../models/userModel";

const registerUser = catchAsyncError(async (req, res, next) => {
  const { name, password, email } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "This is a sample id",
      url: "profilePicUrl",
    },
  });

  res.status(201).json({
    success:true,
    user
  });
});
