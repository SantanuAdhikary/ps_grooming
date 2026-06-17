
// ! class 

class Student 
{
    sname : string 
    sid : number 
    isStudying : boolean 

    constructor(sname : string , sid : number , isStudying : boolean)
    {
        this.sname = sname;
        this.sid = sid;
        this.isStudying = isStudying;
    }
}

let s1 = new Student("rohit",101,true);

console.log(s1)

// ! inheritance 


class Parent 
{
    money : number = 1234567890
}

class Child extends Parent
{

}

let child1 = new Child();
console.log(child1.money)


// ! super()


class Vehicle
{
    vehicleName : string 

    constructor(vehicleName:string)
    {
        this.vehicleName = vehicleName
    }
}

class Car  extends Vehicle
{
    constructor(vehilceName : string)
    {
          super(vehilceName);
    }
}


let car1 = new Car("BMW");



// ! access modifier : public , protected , private

// !  polymorphism 


// ! method overloading

class calculator
{
     m1(value : number) : number;
     m1(value : string) : string;

      m1(value:any) {
        
        return value;
     } 
}

let cal = new calculator()

let ans1 = cal.m1(10);
let ans2 = cal.m1("hi");

console.log(ans1)
console.log(ans2)


// ! method overriding 



class Animal
{
     eat () : void{
        console.log("animal can eat")
     }
}

class Dog extends Animal{

    eat () : void
    {
        console.log("dog does not have mode to eat now")
    }
}
let d1 = new Dog();
d1.eat()


// !  Abstraction 


abstract class Restaurant
{
    abstract biriyani() : void ;
}

class Nexus extends Restaurant
{
    
    biriyani(): void {
        
        console.log("we love biriyani")
    }
}

let n = new Nexus();
n.biriyani()



// ! encapsulation 


class Bank
{
   private balance : number 

    constructor(balance:number)
    {
        this.balance = balance;
    }

    public setBalance(balance:number):void{
         this.balance = balance;
    }

    public getBalnace():number{
        return this.balance;
    }
}

let bank1 = new Bank(1234567);

// bank1.balance = 789;

bank1.setBalance(789);
console.log(bank1.getBalnace())




// ! enum 


enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER"
}


enum Direction {
  Up,     // 0
  Down,   // 1
  Left,   // 2
  Right   // 3
}

let move = Direction.Up;


// ! intersection  & 


type student = {
    sname : string,
    sid : number
}

type player = {
    teamname : string
}

type userDetails = student & player

let stu1 : userDetails = {
    sname : "virat",
    sid : 18,
    teamname : "rcb"
}