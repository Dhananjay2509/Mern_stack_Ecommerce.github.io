import app from "./app";
import dotenv from "dotenv"


//config
dotenv.config({path:"backend/config/config.env"})



app.listen(process.env.PORT,()=>{
    console.log(`Server started at port: ${process.env.PORT}` )
})