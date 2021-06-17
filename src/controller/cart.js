const { find } = require('../models/Cart')
const Cart = require('../models/Cart')

async function getCartProduct(username, productId) {
    const cartProduct = await Cart.find({username})
    return cartProduct
}

async function deleteCartProduct(productId) {
    const cartProduct = Cart.deleteOne({ productId })
    return cartProduct
}

module.exports = {
    getCartProduct,
    deleteCartProduct
}