const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session')
const cors = require('koa2-cors')

const index = require('./routes/index')
const users = require('./routes/users')
const addressRouter = require('./routes/address')
const factoryRouter = require('./routes/factory')
const orderRouter = require('./routes/order')
const productRouter = require('./routes/product')
const cartRouter = require('./routes/cart')
const nodemon = require('nodemon')

// error handler
onerror(app)
// 配置跨域
app.use(cors())

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(addressRouter.routes() ,addressRouter.allowedMethods())
app.use(factoryRouter.routes() ,factoryRouter.allowedMethods())
app.use(orderRouter.routes(), orderRouter.allowedMethods())
app.use(productRouter.routes(), productRouter.allowedMethods())
app.use(cartRouter.routes(), cartRouter.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
