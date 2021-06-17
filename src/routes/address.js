// address router
const router = require('koa-router')()
const { createAddress, getAddressList, getAddress, updateAddress} = require('../controller/address')
const jwtUtil = require('../auth/jwtUtil')

router.prefix('/api/user/address')

//创建收货地址
router.post('/', async function (ctx, next) {
    token = ctx.headers.authorization
    username = jwtUtil.verify(token)
    data = ctx.request.body
    //创建收货地址
    try {
        const newAddress = await createAddress(username, data)
        ctx.body = {
            errno: 0,
            data: newAddress
        }
    } catch (error) {
        ctx.body = {
            errno: 10003,
            message: '创建失败'
        }
    }
})
//获取收货地址列表
router.get('/', async function(ctx,next) {
    const token = ctx.headers.authorization
    const username = jwtUtil.verify(token)
    const list = await getAddressList(username)
    ctx.body = {
        errno: 0,
        data: list
    }
})
//获取单个收货地址
router.get('/:id', async function(ctx,next) {
    const id = ctx.params.id
    const address = await getAddress(id)
    ctx.body = {
        errno:0,
        data: address
    }
})

//更新收货地址
router.post('/:id', async function(ctx,next) {
    const token = ctx.headers.authorization
    const username = jwtUtil.verify(token)
    const id = ctx.params.id
    const data = ctx.request.body

    try {
        const newAddress = await updateAddress(id, username, data)
        ctx.body = {
            errno: 0,
            data:newAddress
        }
        
    } catch (ex) {
        ctx.body = {
            errno: 10004,
            message: `错误-${ex.message}`
        }
    }
   

})

module.exports = router