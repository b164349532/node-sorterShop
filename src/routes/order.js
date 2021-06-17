// order router
const router = require('koa-router')()
const { createOrder } = require('../controller/order.js')
router.prefix('/api/order')

//创建订单
router.post('/', async function(ctx,next) {
    const userInfo = ctx.session.userInfo
    const username = userInfo.username
    //获取订单信息
    const data = ctx.request.body
    //创建订单
    try {
        const neworder = await createOrder(username,data)
        ctx.body = {
            errno: 0,
            data: neworder
        }
    } catch (ex) {
        ctx.body = {
            errno: 10006,
            message: `${ex.message}`
        }
    }
})
//获取订单列表

module.exports = router
