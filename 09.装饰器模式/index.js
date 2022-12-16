/*
 * @Author: XiaoYu
 * @Date: 2022-12-08 10:04:41
 */
/**
 * 装饰器模式：能够很好的对已有功能进行拓张，这样不会更改原有的代码，对气态的业务产生影响，这方便我们在较少的改动下对软件功能进行拓展。
 * 例如：页面访问统计，在点击某个商品时，在跳转前需要统计点击量，那么就可以通过装饰器的方式在原本跳转方法前添加统计点击量的方法
 */

Function.prototype.before = function (beforeFn) {
  let _this = this;
  return function () {
    // 先进行前置函数调用
    beforeFn.apply(this, arguments)

    // 执行原来的函数
    return _this.apply(this.arguments)
  }
}

Function.prototype.after = function (afterFn) {
  let _this = this;
  return function () {
    
    // 先执行原来的函数
    let result = _this.apply(this.arguments)


    // 再执行后置函数调用
    afterFn.apply(this, arguments)

    
    // 返回结果
    return result
  }
}

// 旧函数
function test(){
  console.log('111111111111');
  return 111111111111
}

// 前置函数
let test1 = test.before(function(){
  console.log("0000000000000");
}).after(function(){
  console.log('2222222222222');
})

test1()