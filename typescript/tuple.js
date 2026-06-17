"use strict";
let t1 = [10, "hi", 10, true];
t1.map((ele) => {
    console.log(ele);
});
// ! union 
let userId;
userId = 101;
userId = "one zero one";
userId = true;
userId = 2n;
// ! heterogeneous array 
let array;
array = [10, 30, 40, "hi"];
// ! object 
let x;
let pen;
pen = {
    brand: "camlin",
    price: 23,
    color: "red"
};
// pen.brand = "apsara"
// ! optional property 
//  defined by ?
let student = {
    sname: "bumrah",
    sid: 98,
};
student.sid = "ninety eight";
let bike1 = {
    bikeName: "RE",
    price: 123456,
    color: "red",
};
let bike2 = {
    bikeName: "splinder",
    price: 987654,
    color: "white"
};
let student1Id = "mgr123";
let student2Id = 987;
let x10 = "Hello";
let x11 = x10;
console.log(typeof x11);
console.log(x11.toUpperCase());
