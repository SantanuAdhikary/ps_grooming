

let t1 : [number,string,number,boolean]= [10,"hi",10,true]


t1.map((ele)=>{
    console.log(ele)
})

// ! union 


let userId :number | string | boolean | bigint ; 

userId = 101
userId = "one zero one"
userId = true
userId = 2n



// ! heterogeneous array 

let array : (number | string) []

array = [10,30,40,"hi"]



// ! object 


let x : (number | string) []

let pen : {readonly brand : string,price : number, color:string}

pen = {
    brand : "camlin",
    price : 23,
    color:"red"
}

// pen.brand = "apsara"



// ! optional property 

//  defined by ?


let student : { readonly sname : string,
                sid : (number|string),
                isStuding ?: boolean 
            }
 = {
    sname : "bumrah",
    sid : 98,
}

student.sid = "ninety eight"


// !   type alias 

type BIKE = {
       bikeName : string ,
       price : number,
       color : string
}


let bike1 : BIKE = {
    bikeName : "RE",
    price : 123456,
    color : "red",
}

let bike2 : BIKE = {
    bikeName : "splinder",
    price : 987654,
    color : "white"
}


type collegeId = number | string 

let student1Id : collegeId = "mgr123"
let student2Id : collegeId = 987







