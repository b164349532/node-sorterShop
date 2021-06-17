//购物车模型
const mongoose = require('../db/db')

const Schema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    productId:String,
    imgUrl: String,
    price: Number, 
    location: String,
    productNum:Number,
    tabs:[String]
}, { timestamps: true })

const Cart = mongoose.model('cart', Schema)

module.exports = Cart