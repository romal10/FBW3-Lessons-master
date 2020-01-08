let colors= ["red","orange","blue","green","yellow","pink"];
let body = document.querySelector('body');
let buttonText=document.getElementById("color");

let counter = 0;

function changeColor(){

    if(counter == colors.length){ 
        counter = 0;  // to start from the first element again
    }
    if(counter < colors.length){
        body.style.background = colors[counter];
        buttonText.innerText= colors[counter];
        buttonText.style.color=colors[counter];
        counter++;
    }

}