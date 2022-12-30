/*
 * @Author: XiaoYu
 * @Date: 2022-12-08 10:04:42
 */
/**
 * 适配模式：将一个类的接口转换成客户希望的另外一个接口，适配器模式让那些接口不兼容的类可以一起工作
 */

class TencentMap {
    show(){
        console.log("开始渲染腾讯地图")
    }
}

class BaiduMap {
    display(){
        console.log("开始渲染百度地图")
    }
}

class TencentAdapater extends TencentMap{
    constructor(){
        super()
    }
    display(){
        this.show()
    }
}

function renderMap(map){
    map.display()
}

renderMap(new TencentMap())
renderMap(new BaiduMap())