const router = require('koa-router')()
const jwtUtil = require('../auth/jwtUtil')
const { getCartProduct, deleteCartProduct } = require('../controller/cart')

router.prefix('/api/cart')

router.get('/', async function(ctx, request) {
    token = ctx.headers.authorization
    username = jwtUtil.verify(token)
    try {
       const cartProduct = await getCartProduct(username)
       ctx.body = {
          errno: 0,
          data: cartProduct
    }
    } catch (ex) {
        ctx.body = {
            errno: 10010,
            message: `${ex.message}`,
        }
        
    }
})

router.post('/delete', async function(ctx, next) {
    const { productId } = ctx.request.body
    const cartProduct = deleteCartProduct(productId)
    try {
        ctx.body = {
            errno: 0,
            data: cartProduct
        }
    } catch (ex) {
        ctx.body = {
            errno: 10011,
            message: `${ex.message}`
        }
        
    }
})

module.exports = router
