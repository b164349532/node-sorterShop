// 地址模型

const mongoose = require('../db/db')

const Schema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    city: String,
    departmentL: String,
    houseNumber: String,
    name: String,
    phone: {
        type:String,
        require: true
    }
}, { timestamps: true }) //时间戳

const Address = mongoose.model('address' , Schema)

module.exports = Address