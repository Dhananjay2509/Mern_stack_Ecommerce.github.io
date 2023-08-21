import app from "./app.js";
import connectDatabase from "./config/database.js";
import dotenv from "dotenv";

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
