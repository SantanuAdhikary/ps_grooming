

// ! Object 

  // object literals 


  let stu = {
    sname : "miller",
    sid : 101,
    isPlayer : true

  }
  console.log(stu.sname)  // access
  stu.sid = 110          // modify
  delete stu.isPlayer   // delete
  stu.phno = 12345678   // adding 
  console.log(stu)


//   ! Object.keys()

console.log(Object.keys(stu))  //  ['sname', 'sid', 'phno']

// ! Object.values()

console.log(Object.values(stu))  // ['miller', 110, 12345678]


// ! Object.freeze()

let ob1 = {
    name : "pen",
    price : 30 
}

Object.freeze(ob1)

ob1.name = "pencil"    // modification ❌
ob1.color = "black"   // adding ❌
delete ob1.price     // delete ❌

console.log(ob1)


// ! Object.seal()

let ob2 = {
    name : "pen",
    price : 30 
}

Object.seal(ob2)

ob2.name = "pencil"    // modification ✅
ob2.color = "black"   // adding ❌
delete ob2.price     // delete ❌

console.log(ob2)



// ! object by using new keyword 


class Emp
{
    ename ;
    eid ; 
    sal ;
    constructor(ename , eid , sal)
    {
       this.ename = ename ; 
       this.sal = sal ; 
       this.eid = eid;
    }
}

 let e1 =  new Emp("scott",103, 23456789);
 let e2 =  new Emp("blake",104, 987654);
 console.log(e1)
 console.log(e2)


//  =========================================================================================

console.log("==========================================================================")

// ! Higher Order Function 

// any function that takes another function as parameter is called as higher order function

// ! callback function 

// the function what is sent as a parameter to the higher order function, is called as callaback function.

let hello = (a)=>{
    a();   
}

hello( ()=>{
    console.log("how are you")
} )


// ! higherorder array methods 

// ! map() method 

// it is used to traverse the array 
// it returns new array 
// we can modify all the elments of the array
// it can take 3 parameters (element , index, array)

let arr = [10,15,20,25,30,35]

arr.push(40)

let m = arr.map((ele)=>{

     return ele + 20;
})

console.log(m)



let b = ['html','css','js','java']

let upper = b.map((ele , index , array)=>{

    console.log(ele,index,array)
    return ele.toUpperCase();
})

console.log(upper)


// ! filter()

// it can check the condition

let marks = [54,34,62,78,30,49]

let greater = marks.filter((ele)=>{
    return ele > 50;
})

console.log(greater)


// ! sort()


let unsorted = [9,2,8,5,1]

ascending = unsorted.sort((first , second)=>{
   return first - second
})

console.log(ascending)

let unsorted2 = [9,2,8,5,1]

let desc = unsorted2.sort((f,s)=>{
    return s - f;
})
console.log(desc)


// !   rest parameter 

let usersAge = (a,b,...c)=>{

    console.log(a)
    console.log(b)
    console.log(c)
}

usersAge(30,32,35,45,41,46,60)






// !  Object Destructure 

let bike = {
    bikename : "RE",
    price : 234567,
    color:"white"
}

let {color,bikename , price}  = bike ;

console.log(color)      // white
console.log(bikename)  // RE

// console.log(bike.bikename)
// console.log(bike.price)
// console.log(bike.color)



// !  spread operator

let arr1 = [10,20,30]
let arr2 = [200,300,400]

let combined = [...arr1,...arr2]
console.log(combined)

// Output [10,20,30,200,300,400]



// ! shallow copy and deep copy 


let arr3 = [10,20,40]

let copy = [...arr3]; // deep copy

copy.push(100)

console.log("copy array ",copy)
console.log("original array ",arr3)


// !  how to get api data 


let getUserdata  = async ()=>{

  try{
        let resoponse = await fetch("https://api.github.com/users")
    console.log(resoponse)

    let data = await resoponse.json();
    console.log(data)
  }
  catch(err)
  {
       console.log(err)
  }
}

getUserdata()



// ! promise 


let p =  new Promise((resolve , reject)=>{

    // resolve("i came to the class")
    reject("due to my health issue, I can not come")
})

console.log(p)

p.then((data)=>{
   console.log(data)
})
.catch((err)=>{
    console.log(err)
})

