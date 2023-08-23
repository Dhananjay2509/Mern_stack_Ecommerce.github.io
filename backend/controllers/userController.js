import ErrorHandler from "../utils/errorhandler.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import User from "../models/userModel.js";
import sendToken from "../utils/jwtToken.js";

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

  const token = user.getJWTToken();

  sendToken(user,201,res);
});

// Login User
const loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  //Checking if user has given email and password both
  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email and Password", 400));
  }

  const user = await User.findOne({email}).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const token = user.getJWTToken();

  sendToken(user,200,res);
});

export { registerUser, loginUser };
