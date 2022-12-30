/*
 * @Author: XiaoYu
 * @Date: 2022-12-08 10:04:43
 */
/**
 * 代理模式（proxy），为其他对象提供一种代理以控制对这个对象的访问。
 * 代理模式使得代理对象控制具体对象的引用。代理几乎可以是任何对象：文件，资源，内存中的对象，或者一些难以复制的东西。
 */


// 明星
class Star {
    play(){
        console.log("演戏")
    }
}

// 经纪人
class StarProxy{
    constructor() {
        this.superStart = new Star()
    }

    // 谈合同行为方法：(通过这个方法来决定演戏这个方法是否可执行)
    talk(price){
        if(price >= 10000){
            this.superStart.play()
        }else{
            throw new Error("价钱不合适")
        }
    }
}

let jr = new StarProxy()
jr.talk(10000)//达到合同价格接受演戏
jr.talk(1000)//没有达到合同价格不接受演戏