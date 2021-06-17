// 商品模型

const mongoose = require('../db/db')

const Schema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    factoryId: {
        type: String,
        require: true
    },
    imgUrl: String,
    price: Number, 
    location: String,
    tabs:[String]
}, { timestamps: true })

const Product = mongoose.model('product' , Schema)

module.exports = Product