

* what is css 
* how many ways we can write 
  i. inline 
  ii. internal 
  iii.external
* advantage of external css 
* diffrence b/w id and class selector
* how to do hover on button
  ```html
   <button id="login"> login </button>
  ```

  ```css
  
    #login:hover{
        background-color: red;
        color:cyan;
    }
  ```

* what is focus 
 <input type="text" id="inp1">

```css
    #inp1:focus{

        background-color: brown;
        
    }
```

* what is boxmodel 
   -> content , padding , border , margin 

     <h1 id="heading1">i am heading1</h1>

 ```css
    #heading1{

        border: 2px solid black;
        padding: 10px;
        margin: 50px;
    }
 ```


 * <div></div> tag ??

 * create one profile card 

```html
  <div id="profileCard">
           <img src="imagelink" alt="">
          <h2>santanu </h2>
          <p>java,webtech trainer</p>
    </div>
```

```css

#profileCard{

    background-color: red;
    width: 350px;
    height: 250px;
    padding: 20px;
    border: 3px solid blue;
    border-radius: 20px;
    text-align: center;
}

img{
  height: 150px;   
  width: 150px;
  border-radius: 50%;
}
```

* what is transition and all the properties of transition.

```html
  <div id="circle">

    </div>
```

```css
#circle{
    height: 200px;
    width: 200px;
    background-color: purple; 
    transition: all 1s ease-in 1s;
}

#circle:hover{
  
    background-color: red;
    border-radius : 50%;
}
```


* text property 


    <h1 id="grooming"> welcome to webtech grooming</h1>

```css
  #grooming{
    text-align: center  ;
    text-transform: capitalize;
    letter-spacing: 5px;
    text-shadow: -10px -4px 6px blue;
}
```


* font property 

<p id="para1">Lorem ipsum dolor sit amet consectetur.</p>

```css
   #para1{
    font-size: 30px;
    font-style: italic;
    font-weight: bold;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
```