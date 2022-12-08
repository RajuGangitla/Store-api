const dotenv=require("dotenv").config()
const express = require("express");
require("express-async-errors")
const app=express()
const PORT = process.env.PORT || 8000;
const connectDB = require("./db/connect");
const productsRouter = require('./routes/products')
const errorMiddleware = require('./middleware/error-handler')
const notFoundMiddleware = require('./middleware/not-found')

//middleware
app.use(express.json())


//routes
app.get('/',(req,res)=>{
    res.send('<h1>Store Api</h1><a href="/api/v1/products">products </a>')
})

//routes
app.use('/api/v1/products',productsRouter)
app.use(errorMiddleware)
app.use(notFoundMiddleware)



connectDB()
app.listen(PORT,()=>{console.log(`server is running on ${PORT}`)})