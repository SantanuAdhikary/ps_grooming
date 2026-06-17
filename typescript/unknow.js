"use strict";
let b;
b = "hello";
if (typeof b == "string")
    console.log(b.toUpperCase());
b = 20;
if (typeof b == "number")
    console.log(b + 80);
let c;
c = "hi";
c = 30;
c = true;
if (typeof c == "string")
    console.log(c.toUpperCase());
else if (typeof c == "number")
    console.log(c + 70);
else
    console.log("not possible");
