//factory controller
// 热门厂家
const Factory = require('../models/Factory')
const Product = require('../models/Product')

/**
 * 
 * @returns 创建厂家
 */
 async function createFactory(data) {
    const factorys = await Factory.create({
        ...data
    })
    return factorys
}

/**
 * 
 * @returns 获取厂家列表
 */
async function getFactoryList() {
    const list = await Factory.find().sort({ _id: -1 })
    return list
}

/**
 * 获取单个厂家
 * @param {string} id id
 */
async function getFactoryInfo(id) {
    const factory = await Factory.findById(id)
    return factory
}

/**
 * 获取厂家商品
 * @param {string} factoryId id
 * @param {string} tab 
 * @returns 
 */
async function getProducts (factoryId , tab ='all') {
    const productList = await Product.find( {
        factoryId,
        tabs: {
            $in: tab
        }
    } )
    return productList
}


module.exports = {
    createFactory,
    getFactoryList,
    getFactoryInfo,
    getProducts
}