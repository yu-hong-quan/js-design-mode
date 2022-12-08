/*
 * @Author: XiaoYu
 * @Date: 2022-12-06 16:00:41
 */

/**
 * 由一个工厂对象决定创建某一种产品对象类的实例。主要用来创建同一类对象。
 * 简单工厂模式的有点在于，你只需要一个正确的参数，就可以获取到你所需要的对象，而无需知道其创建的具体细节。
 * 简单工厂模式只能作用于创建的对象数量较少，对象的创建逻辑不复杂时使用。
 */

// 未使用工厂模式写法
function User(role, pages) {
  this.role = role
  this.pages = pages
}
let a = new User("superadmin", ["home", "user-manage", "right-manage", "news-manage"])
let b = new User("admin", ["home", "user-manage", "news-manage"])
let c = new User("editor", ["home", "user-manage"])
// a.role === current.role


// "es5" 使用工厂模式写法
function UserFactory(role) {
  function UserT(role, pages) {
    this.role = role
    this.pages = pages
  }  
  switch (role) {
    case "superadmin":
      return new UserT("superadmin", ["home", "user-manage", "right-manage", "news-manage"])
    case "admin":
      return new UserT("admin", ["home", "user-manage", "news-manage"])
    case "editor":
      return new UserT("editor", ["home", "user-manage"])
    default:
      throw new Error("参数错误")
  }
}
let user = UserFactory('superadmin')
console.log(user);


// "es6" 使用工厂模式写法
class UserClass{
  constructor(role,pages){
    this.role = role
    this.pages = pages
  }
  static UserFactory(role) {//静态方法static
    switch (role) {
      case "superadmin":
        return new UserClass("superadmin", ["home", "user-manage", "right-manage", "news-manage"])
      case "admin":
        return new UserClass("admin", ["home", "user-manage", "news-manage"])
      case "editor":
        return new UserClass("editor", ["home", "user-manage"])
      default:
        throw new Error("参数错误")
    }
  }
}

let userTwo = UserClass.UserFactory('editor') //因为UserFactory为静态方法，所以不需要通过new一个对象来访问该构造函数
console.log(userTwo);