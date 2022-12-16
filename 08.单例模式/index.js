/*
 * @Author: XiaoYu
 * @Date: 2022-12-08 10:04:40
 */
/**
 * 单例模式：
 * 1、保证一个类仅有一个实例，并提供一个访问它的全局访问点
 * 2、主要解决一个全局使用的类频繁地创建和销毁，占用内存
 */


//单例模式es5的写法
let Singleton = (function () {
  var instance;
  
  function User(name, age) {
    this.name = name;
    this.age = age;
  }

  return function(name,age){
    if(!instance){
      // 创建实例
      instance = new User(name,age)
    }
    return instance
  }
})()

// 第一次调用
console.log(Singleton() === Singleton());

//因为闭包的原因，第一次调用后没有被释放，导致内部的数据一直为第一次调用产生得结果，无论后面怎么调用传值都不会发生改变，这就是单例模式体现的一种
console.log(Singleton('xiaoyu',100));//结果：User { name: undefined, age: undefined }  



//单例模式es6的写法
class SingletonEsFive{
  constructor(name,age){
    if(!SingletonEsFive.instance){
      this.name = name;
      this.age = age;
      SingletonEsFive.instance = this;
    }
    return SingletonEsFive.instance
  }
}

console.log(new SingletonEsFive('xiaoyu',100) === new SingletonEsFive('xiaoming',18));//结果：true

