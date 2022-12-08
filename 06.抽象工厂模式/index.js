/*
 * @Author: XiaoYu
 * @Date: 2022-12-06 16:41:53
 */
/**
 * 抽象工厂模式并不直接生成实例，而是用于对产品类簇的创建
 */
class User {
  constructor(name, role, pages) {
    this.name = name;
    this.role = role;
    this.pages = pages;
  }

  welcome() {
    console.log("欢迎回来", this.name)
  }

  dataShow() {
    throw new Error("抽象方法需要被实现")
  }
}

class SuperAdmin extends User {
  constructor(name) {
    super(name, "superadmin", ["home", "user-manage", "right-manage", "news-manage"])
  }

  dataShow() {
    console.log("superadmin-datashow")
  }

  addRight() {
    console.log("superadmin-addRight")
  }

  addUser() {
    console.log("superadmin-addUser")
  }
}

class Admin extends User {
  constructor(name) {
    super(name, "admin", ["home", "user-manage", "news-manage"])
  }

  dataShow() {
    console.log("admin-datashow")
  }

  addUser() {
    console.log("admin-addUser")
  }
}

class Editor extends User {
  constructor(name) {
    super(name, "editor", ["home", "user-manage"])
  }

  dataShow() {
    console.log("editor-datashow")
  }
}

function getAbstractUserFactory(role) {
  switch (role) {
    case "superadmin":
      return SuperAdmin;
    case "admin":
      return Admin;
    case "editor":
      return Editor;
    default:
      throw new Error("参数错误")
  }
}

let UserClass = getAbstractUserFactory("superadmin")
let user = new UserClass('xiaoyu')
console.log(user)
user.dataShow()
user.welcome()
user.addRight()
user.addUser()
