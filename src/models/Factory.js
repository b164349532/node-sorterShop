// 生成厂家家模型

const mongoose = require('../db/db')

const Schema = mongoose.Schema({
    name: String,
    imgUrl: String,
    sales: String,
    slogan: String,
    tabs: [String]
}, { timestamps: true })

const Factory = mongoose.model('factory' , Schema)

module.exports = Factory