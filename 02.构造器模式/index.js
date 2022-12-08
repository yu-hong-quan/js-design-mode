/*
 * @Author: XiaoYu
 * @Date: 2022-12-06 14:34:07
 */

// 未使用构造器时写法
let employee1 = {
  name: 'xiaoyu',
  age: 100
}

let employee2 = {
  name: 'tiechui',
  age: 18
}


// 使用构造器时写法
function Employee(name, age) {
  this.name = name
  this.age = age
  this.say = function(){
    console.log(this.name + "-" + this.age)
  }
}

let employee3 = new Employee('xiaoyu', 100)
employee3.say()

let employee4 = new Employee('tiechui', 18)
employee4.say()


