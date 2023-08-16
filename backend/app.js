import express from "express"
import product from "./routes/productRoute.js"

const app=express();

app.use(express.json())
 
//Route Imports

app.use('/api/v1',product)

export default app;