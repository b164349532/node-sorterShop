# 数据模型设计

## 用户

```js 
{   
    _id: '用户的id'
    username: '15632168122',
    password: '',
}
```

## 地址

```js 
{   
    username: '15632168122' 
    _id: '收货地址的id'
    city: '北京'
    departmentL: 'xx小区'
    houseNumber: '门牌号'
    name: '张三'
    phone: '13808491223'
}
```

## 厂家

```js 
{
    id: ''
    name: ''
    imgUrl: '商店的图片的url'
    sales: '1000'  //月售
    slogan: '' //宣传语
    tabs: ['all', 'seckill']
}
```

## 商品 

```js 
{
    id: ''
    name: ''
    shopId: 'xxx' //厂家的id
    imgUrl: '商店的图片的url'
    price: '1000'  //价格
    location: ''  //产地
}
```

## 订单

```js 
{   
   username: 'zhangsan'
   shopId : '商店的id',
   shopName: '商店名称',
   isCanceled: false //是否被取消
   address: {
        _id: '收货地址的id'
        city: '北京'
        departmentL: 'xx小区'
        houseNumber: '门牌号'
        name: '张三'
        phone: '13808491223'
   }

   products: [
       {
            product: {
                id: ''
                name: ''
                shopId: 'xxx' //厂家的id
                imgUrl: '商店的图片的url'
                price: '1000'  //价格
                location: ''  //产地
                tabs: ['all', 'seckill', 'fruit']
           },
            orderSales: 3    //购买数量
       },
       {
            product: {
                id: ''
                name: ''
                shopId: 'xxx' //厂家的id
                imgUrl: '商店的图片的url'
                price: '1000'  //价格
                location: ''  //产地
           },
            orderSales: 3    //购买数量
       }
   ]
}
```

