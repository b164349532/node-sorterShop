// product.router
const router = require('koa-router')()
const { createProduct, getProductList, getProduct, getCartContent } = require('../controller/product')
const jwtUtil = require ('../auth/jwtUtil')
router.prefix('/api/product')
/**
 * 创建商品
 */
router.post('/', async function(ctx,next) {
    const datas = ctx.request.body
    const product = await createProduct(datas)
    ctx.body = {
        errno: 0,
        data: product
    }
})
/**
 * 获取商品列表
 */
router.get('/list',  async function(ctx,next) {
    const productList = await getProductList()
    ctx.body = {
        errno: 0,
        data: productList
    }
})

/**
 * 通过id查找商品
 */
router.get('/:id', async function(ctx,next) {
    const productId = ctx.params.id
    try {
        const product = await getProduct(productId) 
        ctx.body = {
            errno: 0,
            data: product
        }
    } catch (ex) {
        ctx.body = {  
            message: `${message.ex}`
        }   
    }
})

router.post('/cart/:id', async function(ctx,next) {
    const token = ctx.headers.authorization
    const username = jwtUtil.verify(token)
    const productId = ctx.params.id
    const cart = await getCartContent(username, productId)
    ctx.body = {
        errno: 0,
        data: cart
    }
})



module.exports = router