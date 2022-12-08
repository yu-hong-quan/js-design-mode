/*
 * @Author: XiaoYu
 * @Date: 2022-12-06 14:51:52
 */

/**
 * 将构造器模式和原型模式合二为一
 */

// 创建一个类
class Employee{
  // 类实例
  constructor(name,age){
    this.name = name
    this.age = age
  }
  // 类方法
  say(){//会默认挂载在原型上
    console.log(this.name + "-" + this.age)
  }
}

var employee1 = new Employee('xiaoyu',100)
console.log(employee1.name);
console.log(employee1.say());