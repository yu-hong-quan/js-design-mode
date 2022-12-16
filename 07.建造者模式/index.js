/*
 * @Author: XiaoYu
 * @Date: 2022-12-08 10:04:37
 */

/**
 * 建造者模式：属于创建型模式的一种，提供一种创建复杂对象的方式。
 * 它将一个复杂的对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示。
 * 建造者模式是一步一步的创建一个复杂的对象，它允许用户只通过指定复杂的对象的类型和内容就可以构建它们，用户不需要指定内部的具体构造细节。
 */


class Navbar {
  init() {
    console.log("navbar-list");
  }

  getData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("navbar-getData111111")
      }, 1000)
    })
  }

  render() {
    console.log("navbar-render");
  }
}

class List {
  init() {
    console.log("List-list");
  }

  getData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("List-getData111111")
      }, 1000)
    })
  }

  render() {
    console.log("List-render");
  }
}

class Creator {
  // 通过async/await将方法改造成异步，营造异步处理情况
  async startBuild(builder) {
    await builder.init()
    let data = await builder.getData()
    console.log(data);
    await builder.render()
  }
}

const op = new Creator()
op.startBuild(new Navbar())
op.startBuild(new List())