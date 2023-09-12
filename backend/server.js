import app from "./app.js";
import connectDatabase from "./config/database.js";
import dotenv from "dotenv";
import cloudinary from "cloudinary"

//Handling uncaught Exception
process.on("uncaughtException",(err)=>{
  console.log(`Error: ${err.message}`)
  console.log("Shutdown due to uncaught Exception")
    process.exit(1);
})

//config
dotenv.config({ path: "backend/config/config.env" });

//Connecting to Database
connectDatabase()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,  
})

const server =app.listen(process.env.PORT, () => {
  console.log(`Server started at port: ${process.env.PORT}`);
});

//Unhandled Rejection Error
process.on("unhandledRejection",(err)=>{
  console.log(`Error: ${err.message}`)
  console.log("Shutdown due to unhandled promise rejection")
  server.close(()=>{
    process.exit(1);
  })
})
