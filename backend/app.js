import express from "express"
import product from "./routes/productRoute.js"
import errorMiddleware from "./middleware/error.js"

const app=express();

app.use(express.json())
 
//Route Imports
app.use('/api/v1',product)

//Middleware for Errors
app.use(errorMiddleware)

export default app;