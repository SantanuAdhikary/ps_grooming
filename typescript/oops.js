"use strict";
// ! class 
class Student {
    sname;
    sid;
    isStudying;
    constructor(sname, sid, isStudying) {
        this.sname = sname;
        this.sid = sid;
        this.isStudying = isStudying;
    }
}
let s1 = new Student("rohit", 101, true);
console.log(s1);
// ! inheritance 
class Parent {
    money = 1234567890;
}
class Child extends Parent {
}
let child1 = new Child();
console.log(child1.money);
// ! super()
class Vehicle {
    vehicleName;
    constructor(vehicleName) {
        this.vehicleName = vehicleName;
    }
}
class Car extends Vehicle {
    constructor(vehilceName) {
        super(vehilceName);
    }
}
let car1 = new Car("BMW");
// ! access modifier : public , protected , private
// !  polymorphism 
// ! method overloading
class calculator {
    m1(value) {
        return value;
    }
}
let cal = new calculator();
let ans1 = cal.m1(10);
let ans2 = cal.m1("hi");
console.log(ans1);
console.log(ans2);
// ! method overriding 
class Animal {
    eat() {
        console.log("animal can eat");
    }
}
class Dog extends Animal {
    eat() {
        console.log("dog does not have mode to eat now");
    }
}
let d1 = new Dog();
d1.eat();
// !  Abstraction 
class Restaurant {
}
class Nexus extends Restaurant {
    biriyani() {
        console.log("we love biriyani");
    }
}
let n = new Nexus();
n.biriyani();
// ! encapsulation 
class Bank {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    setBalance(balance) {
        this.balance = balance;
    }
    getBalnace() {
        return this.balance;
    }
}
let bank1 = new Bank(1234567);
// bank1.balance = 789;
bank1.setBalance(789);
console.log(bank1.getBalnace());
// ! enum 
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["Editor"] = "EDITOR";
    UserRole["Viewer"] = "VIEWER";
})(UserRole || (UserRole = {}));
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; // 3
})(Direction || (Direction = {}));
let move = Direction.Up;
let stu1 = {
    sname: "virat",
    sid: 18,
    teamname: "rcb"
};
