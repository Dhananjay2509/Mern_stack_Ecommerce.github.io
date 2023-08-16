import app from "./app.js";
import connectDatabase from "./config/database.js";
import dotenv from "dotenv";

//config
dotenv.config({ path: "backend/config/config.env" });

//Connecting to Database
connectDatabase()

app.listen(process.env.PORT, () => {
  console.log(`Server started at port: ${process.env.PORT}`);
});
