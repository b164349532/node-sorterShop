# API 设计

## 注册

### url

`api/user/register`

### method

`post`

### request body 

```js
{
 username: '',
 password: ''
}
```

### response body 

```js
{
   errnr: 0
   message: 'errno !== 0 错误信息'
}
```

## 登录

### url

`api/user/login`

### method

`post`

### request body 

```js
{
 username: '',
 password: ''
}
```

### response body 

```js
{
   errnr: 0
   message: 'errno !== 0 错误信息'
}
```

## 获取用户信息

### url

`api/user/info`

### method

`get`

### request body 

无

### response body 

```js
{
   errnr: 0
   data: {
       username: ''
   }
   message: 'errno !== 0 错误信息'
}
```

## 创建收货地址

### url

`api/user/address`

### method

`post`

### request body 

```js
{
    _id: '收货地址的id'
    city: '北京'
    departmentL: 'xx小区'
    houseNumber: '门牌号'
    name: '张三'
    phone: '13808491223'
}
```

### response body 

```js
{
   errnr: 0
   data: {
       _id: '收货地址的id'
   }
   message: 'errno !== 0 错误信息'
}
```

## 获取收货地址列表

### url

`/api/user/address`

### method

`get`

### request body 

无

### response body 

```js
{
   errnr: 0
   data: [
       {
           _id: '收货地址的id'
           city: '北京'
           departmentL: 'xx小区'
           houseNumber: '门牌号'
           name: '张三'
           phone: '13808491223'
       }
   ]
   message: 'errno !== 0 错误信息'
}
```

## 获取单个收货地址

### url

`api/user/address/:id`

### method

`get`

### request body 

无

### response body 

```js
{
   errnr: 0
   data: {
       _id: ''
   }
   message: 'errno !== 0 错误信息'
}
```

## 更新单个收货地址

### url

`api/user/address/:id`

### method

`patch`

### request body 

```js
{
        _id: '收货地址的id'
        city: '北京'
        departmentL: 'xx小区'
        houseNumber: '门牌号'
        name: '张三'
        phone: '13808491223'
      
}
```

### response body 

```js
{
   errnr: 0
   message: 'errno !== 0 错误信息'
}
```


## 厂家列表

### url

`api/factory/list`

### method

`get`

### request body 

无

### response body 

```js
{
   errnr: 0
   data: [
       {
           id: ''
           name: ''
           imgUrl: '商店的图片的url'
       }
   ]
   message: 'errno !== 0 错误信息'
}
```

## 获取单个厂家

### url

`api/factory/:id`

### method

`get`

### request body

无

### response body

```js
{
   errnr: 0
   data: [
       {
           id: ''
           name: ''
           imgUrl: '商店的图片的url'
       }
   ]
   message: 'errno !== 0 错误信息'
}
```

## 分拣机厂家详商品详情

### url

`api/factory/:id/products`

### method

`get`

### request body 

无

### response body 

```js
{
   errnr: 0
   data: [
       {
        _id: ''
        name: ''
        imgUrl: '商店的图片的url'
        sales: 3000,
        slogan: xxxx,
        tabs: ['all']
   }
   ]
   message: 'errno !== 0 错误信息'
}
```

## 查询分拣机商店的商品列表

### url

`api/shop/:id/product`

### query

`tab=all`

### method

`get`

### request body 

无

### response body 

```js
{
   errnr: 0
   data: [
       {
        _id: ''
        name: ''
        imgUrl: '商店的图片的url'
        sales: '10'
        price: ''
    }
   ]
   message: 'errno !== 0 错误信息'
}
```

## 创建订单

### url

`api/order`

### method

`post`

### request body 

```js
{
  addressId: '收货地址id',
  shopId : '商店的id',
  shopName: '商店名称',
  isCanceled: false //是否被取消
  product: [
      {
          id: '',
          num: '' //购买数量
      },
      {
          id: '',
          num: '' //购买数量
      }
  ]

}
```
### response body 

```js
{
   errnr: 0
   data: {
        _id: ''
   }
   message: 'errno !== 0 错误信息'
}
```

