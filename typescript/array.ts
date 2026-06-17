

// ! declaring string type of array

let names : string[] = ["virat","rohit","iyer","suriya","hardik"]

names.push("dhoni")

// ! declaring number type of array

let marks : number[] = [10,30]

// marks.unshift("mathematics")

// ! declaring boolean type of array

let booleanArr : boolean[]= [true,false,true,false]

booleanArr[0] = false
booleanArr[1] = true



// ! nested array for string


let nested : string [][] = [['html','css','js'],['java','python','sql']]


nested.push(['node','express','mongodb'])

// ! nested array for  number


let nested2 : number[][] = [[10,20,30],[80,90,100]]



// ! how to traverse array 


// ! for loop 

for(let i=0 ; i<names.length;i++)
{
    console.log(names[i]);
}

// ! map method 

let players = names.map((ele)=>{
   return ele.toUpperCase();
})

console.log(players)






