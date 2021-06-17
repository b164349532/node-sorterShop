// order controller
const Order = require('../models/Order')
const Product = require('../models/Product')
const Address = require('../models/Address')
/**
 * 
 * @param {string} username 
 * @param {Object} data 
 */
async function createOrder (username,data) {
    const { 
        addressId,
        factoryId,
        factoryName,
        isCanceld = false,
        products = []
    } = data

    //获取地址
    const address = await Address.findById(addressId)

    //获取商品列表
    const pIds = products.map(p => p.id)
    const productList = await Product.find({
        factoryId,
        _id: {
            $in: pIds
        }
    })
    //拼接上购买数量
    const productListWidthSales = productList.map( p => {
        //通过id找到商品
        const id = p._id.toString()

        const filterProducts = products.filter(item => item.id === id)
        if(filterProducts.length === 0) 
        throw new Error('未找到匹配的销量数据')
        return {
            product: p,
            orderSales: filterProducts[0].num
        }     
    })
    //创建订单
    const newOrder = await Order.create({
        username,
        factoryId,
        factoryName,
        address,
        isCanceld,
        products: productListWidthSales
    })

    return newOrder
}

module.exports = {
    createOrder 
}