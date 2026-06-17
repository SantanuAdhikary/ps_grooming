## transform 


.box{
    height: 200px;
    width: 200px;
    background-color: red;
    transition: all 1s ease-in;


    margin: 200px auto;
}

.box:hover{
    background-color: yellow;
    /* transform: translate(-200px,-200px); */
    /* transform: rotate(360deg); */
    /* transform: scale(0.5); */
    transform: skew(45deg);
}

## animation 

@keyframes dark_light
{

    from{
          background-color: black;     
    }
    to{
          background-color: white;
    }
}

## flex 



### responsive 


@media (max-width:798px)
{
   
    h2{
        color:green;
    }
    .outer{
        background-color: yellow;
        flex-direction: column;
    }
}


