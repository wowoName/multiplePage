function myAge(age) {
    return (target) => {
        target.age = 10
    }
}
@myAge(20)
export default class Person {
    name = "我的名字";
    constructor(name) {
        this.name = name
    }
    sayHello() {
        console.log('我的名字是' + this.name + "年龄：" + Person.age)
    }
}