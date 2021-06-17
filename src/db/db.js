// moogose 链接数据库
const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017' //本地默认的地址
const dbName ='testdb' //数据库名称

// 配置
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

//开始链接
mongoose.connect(`${url}/${dbName}` , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 

const db = mongoose.connection

db.on('error' , err => {
    console.log('mongoose connect error' , err);
})
db.on('disconnected',()=>{
    console.log('断开连接')
})

db.once('open' ,  () => {
    console.log('mongoose连接成功');
})

module.exports = mongoose