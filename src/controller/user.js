const User = require('../models/User')
/**
 * 注册
 * @param {string} username 用户名
 * @param {string} password 密码
 * @returns 
 */
async function register(username , password){
    // 保存到数据库
    const name = User.find({ username })
    if(name && name.length > 0) {
        return true
    } else {
        const newUser = User.create({ username, password })
        return newUser
    }
}

/**
 * 
 * @param {string} username 用户名
 * @param {string} password 密码
 */
async function login(username,password) {
   const user = await User.findOne({ username , password })
   if(user != null){
       return true
   }
   return false
}

async function getUser(username) {
    const user = await User.findOne({ username })
    return user
}

module.exports = {
    login,
    register,
    getUser
}