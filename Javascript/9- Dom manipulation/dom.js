let h1= document.querySelector("h1");
let body=document.querySelector("body");
body.style.background="lightgreen";

let isBlue=false;

function changeColor(){
    if(isBlue==true){
        body.style.background="white";
    }
    else {
        body.style.background="lightblue";
    }
    isBlue=!isBlue;

}

setInterval( changeColor,1000); // make something after specific time (1000ms)


h1.style.color= "green";
h1.style.margin="10%";







