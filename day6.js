

// ! 1. target the element 


let topic = document.getElementById("topic")
console.log(topic)


// ! 2. apply css 

topic.style.color = "red"
topic.style.textAlign = "center"
topic.style.textTransform="capitalize"


// ! 3. write content 

let heading2 = document.getElementById("heading2")
console.log(heading2)

heading2.innerText = "i am from js file"


// 8861445180
// ! 4. create element 

let h3 = document.createElement("h3")

h3.innerText = "i am h3 from js "

// ! 5. display element 

heading2.before(h3)




let section = document.getElementById("section")
console.log(section)

section.style.height = "200px"
section.style.width = "200px"
section.style.backgroundColor = "red"

let h4 = document.createElement("h4")
h4.innerText = "i am h4"

section.prepend(h4)


// ! 6. how to add or remove class

let article = document.getElementById("article")

article.classList.add("card")
article.classList.remove("card")


let green = document.getElementById("g")
green.classList.add("orange")
green.classList.remove("green")



// !  event 


function wish()
{
    console.log("all the best 👍")
}


let changeColor =()=>{
    let box = document.getElementById("box")
    box.style.backgroundColor = "red"
}

