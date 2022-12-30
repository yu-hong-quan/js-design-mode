/*
 * @Author: XiaoYu
 * @Date: 2022-12-08 10:04:42
 */
/**
 * 策略模式：策略模式定义了一系列算法，并将每个算法封装起来，使它们可以相互替换，且算法的变化不会影响使用算法的客户。
 * 策略模式属于对象行为模式，它通过对算法进行封装，把使用算法的责任和算法的实现分割开来，并委派给不同的对象对这些算法进行管理。
 * 该模式主要解决在有多种算法相似的情况下，使用if...else所带来的复杂和难以维护问题。它的优点是算法可以自由切换，同时可以避免多重if...else判断，且具有良好的扩展性。
 */


let strategry = {
    "A":(salary)=>{
        return salary * 4
    },
    "B":(salary)=>{
        return salary * 3
    },
    "C":(salary)=>{
        return salary * 2
    }
}
function calBonus(level,salary){
    return strategry[level](salary)
}
calBonus("A",10000)
calBonus("C",8000)


