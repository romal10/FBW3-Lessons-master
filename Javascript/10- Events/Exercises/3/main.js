let p = document.getElementById('colorCode');
let div = document.getElementById('myColor');
let newcolor;


function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {

        color += letters[Math.floor(Math.random() * 16)];

    }   

    return color;

}
function chcolor(){
    newcolor = getRandomColor();
    p.innerHTML = newcolor;
    div.style.background = newcolor;

}
let firstColor,secondColor,thirdColot,forthColor,graColor,deg;
let body=document.querySelector("body");


function gra(){
    firstColor = getRandomColor();
    secondColor = getRandomColor();
     thirdColot= getRandomColor();
     forthColor= getRandomColor();
     graColor =  "linear-gradient(270deg,"+ firstColor+','+ secondColor+")";
     document.getElementById("body").innerHTML ="<br>The new BackgroundColor : "+graColor;
     body.style.background=graColor;
}
