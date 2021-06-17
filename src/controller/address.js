const Address =  require('../models/Address')

/**
 * 
 * @param {string} username 用户名
 * @param {string} data 创建的数据
 * @returns 
 */
async function createAddress(username, data) {
    const address = await Address.create({
        username,
        ...data  //平铺数据
    })
    return address
}
/**
 * 
 * @param {string} username 用户名
 * @returns 
 */
async function getAddressList(username) {
    const list = await Address.find({ username }).sort({ updatedAt: -1 })
    return list
}

/**
 * 
 * @param {string} addressId  id
 */
async function getAddress(id) {
    const address = await Address.findById(id)
    return address
}

/**
 * 
 * @param {string} id id
 * @param {string} username 用户名
 * @param {object} data 详细地址
 * @returns 
 */
async function updateAddress(id, username, data) {
    const newAddress = await Address.findOneAndUpdate(
        { _id: id, username }, //查询条件
        { username, ...data }, //要更新的数据
        { new: true }
    )
    return newAddress

}

module.exports = {
    createAddress,
    getAddressList,
    getAddress,
    updateAddress
}