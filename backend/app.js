import express from "express"
import product from "./routes/productRoute.js"
import errorMiddleware from "./middleware/error.js"
import user from "./routes/userRoute.js"

const app=express();

app.use(express.json())
 
//Route Imports
app.use('/api/v1',product);
app.use('/api/v1', user);

//Middleware for Errors
app.use(errorMiddleware)

export default app;