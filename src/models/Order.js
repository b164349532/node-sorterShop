const mongoose = require('../db/db')


const Schema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    factoryId: String,
    factoryName: String,

    isCanceled: {
        type:Boolean,
        default: false
    },

    address: {
        city: String,
        departmentL: String,
        houseNumber: String,
        name: String,
        phone: Number,
    },

    products: [
        {
        product: {
            factoryId: {
                type:String,
                require: true
            },
            name: String,
            imgUrl: String,
            price: Number,
            location: String,
            tabs: [String]
        },
        orderSales: Number
    }
    ]


 
}, { timestamps: true })

const Order = mongoose.model('order' , Schema)

module.exports = Order