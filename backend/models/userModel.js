import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const userSchema= new mongoose.Schema({
   
    name:{
        type:String,
        required:[true,"Please Enter you name"],
        maxLength:[30,"Name can not exceed 30 characters"],
        minLength:[4,"Name should have minimum four characters"]
    },
    email:{
        type:String,
        required:[true,"Please Enter you name"],
        unique:true,
        validate:[validator.isEmail, "Please Enter a valid email"]
    },
    password:{
        type:String,
        required:[true,"Please Enter you password"],
        maxLength:[10,"Password can not exceed 10 characters"]
    },
    avatar:{
        public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          },
    },
    role:{
        type:String,
        default:"user"
    },

    resetPasswordToken:String,
    resetPasswordExpire:Date

});


userSchema.pre("save", async function(next){
    if(!this.isModified('password')){
        next();
    }
    this.password= await bcrypt.hash(this.password,10)
})

export default mongoose.model("User",userSchema)