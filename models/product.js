const mongoose = require("mongoose")

const productScheema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'product name must be provided']
    },
    price:{
        type:Number,
        required:[true, 'product price name must be provided']
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.5
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values:['ikea', 'liddy', 'marcos', 'caressa'],
            message: '{Value} is not supported'
        }
    }
})


module.exports = mongoose.model("Product", productScheema)