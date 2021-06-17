const Product = require('../models/Product')
const Cart = require('../models/Cart')

async function createProduct(datas) {
    const product = await Product.create({
        ...datas
    })
    return product
}

async function getProductList() {
    const productList = await Product.find().sort({ _id: -1 })
    return productList
}

//查找单个商品
async function getProduct(factoryId) {
    const product = await Product.findById(factoryId)
    return product
}

//商品添加购物车
async function getCartContent(username, productId) {
    const product = await Product.findById(productId)
    const cart = await Cart.find({username})
    const newCart = await Cart.create({
        username,
        productId,
        name: product.name,
        price: product.price,
        imgUrl: product.imgUrl,
        productNum: 1
})
    return newCart
}

module.exports = {
    createProduct,
    getProductList,
    getProduct,
    getCartContent
}