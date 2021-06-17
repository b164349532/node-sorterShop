// factory router
const router = require('koa-router')()
const { createFactory, getFactoryList, getFactoryInfo, getProducts} = require('../controller/factory')
router.prefix('/api/factory')

// 创建厂家
router.post('/create', async function(ctx,next) {
    const data = ctx.request.body
    const factory = await createFactory(data)
    ctx.body = {
        errno: 0,
        data: factory
    }
})
//厂家列表
router.get('/list', async function(ctx,next) {
   try {
    const list = await getFactoryList()
    ctx.body = {
        errno: 0,
        data:list
    }
   } catch (ex) {
       ctx.body = {
           errno: 10005,
           message: `${ex.message}`
       }      
   }
})

//单个商店信息
router.get('/:id', async function(ctx, next) {
    const id = ctx.params.id
    const factory = await getFactoryInfo(id)
    ctx.body = {
        errno: 0,
        data:factory
    }

})

//获取厂家商品
router.get('/:id/products', async function(ctx,next) {
    const factoryId = ctx.params.id
    const tab = ctx.query.tab || 'all' //默认all
    const productList = await getProducts(factoryId,tab)
    ctx.body = {
        errno: 0,
        data: productList
    }   
})


module.exports = router