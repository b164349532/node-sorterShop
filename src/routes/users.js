const router = require('koa-router')()
const { register, login, getUser } = require('../controller/user')
const jwtUtil = require('../auth/jwtUtil')


router.prefix('/api/user')
//注册
router.post('/register', async function (ctx, next) {
  const { username, password } = ctx.request.body

  try {
    const user = await register(username, password)
    if(user && user.length > 0) {
      ctx.body = {
        errno: '10003',
        message: '用户名已存在'
      }
    } else {
      ctx.body = {
        errno: 0,
        message: '注册成功',
        data: user
      }
    }
  } catch (ex) {
    ctx.body = {
      errno: 10001,
      message: `注册失败-${ex.message}`
    }

  }
})

// 登录
router.post('/login', async function(ctx,next){
  const { username, password } = ctx.request.body
  const res = await login(username, password)
  if(res) {
    ctx.body = {
      errno: 0,
      message: '登陆成功',
      data: {
        token:jwtUtil.getToken({username})
      }
    }
  }else {
    ctx.body = {
      errno: 10001,
      message: '登陆失败'
    }
  }
})

router.get('/', async function(ctx, next) {
  const token = ctx.headers.authorization
  const username = jwtUtil.verify(token)
  const user = await getUser(username)
  ctx.body = {
    errno: 0,
    data: user
  }
})


 






module.exports = router
