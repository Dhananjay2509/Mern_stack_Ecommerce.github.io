import ErrorHandler from "../utils/errorhandler.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import User from "../models/userModel.js";

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

  const token= user.getJWTToken();

  res.status(201).json({
    success:true,
    token
  });
});

export default registerUser;
