require("dotenv").config()
const connectDB = require("./db/connect");
const Product = require('./models/product')
const jsonProducts = require('./products.json')


const start= async ()=>{
    try {
        await connectDB()
        await Product.create(jsonProducts)
        console.log("running")
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()