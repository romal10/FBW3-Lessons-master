function sayHi() {
    let name = prompt(" Hello what is your name");
    alert("hi " + name + "!!!!!")
}
let body = document.getElementsByTagName("body")[0];

function chBgColor() {
    //let body= document.querySelector("body"); // get the first element
    //let body = document.querySelectorAll("body")[0];    
    body.style.backgroundColor = "#ff2255";
}
function chBg(color) {
    body.style.backgroundColor = color;
}
let counter = 1;
function chImg() {
    let img = document.getElementById("logoImg");
    counter++;
    let newSrc = "https://picsum.photos/id/" + counter + "/300/300";
    img.setAttribute("src", newSrc);
}
function chImg2() {
    let img = document.getElementById("logoImg");
    let firstImg = "https://picsum.photos/id/666/300/300";
    let secondImg = "https://picsum.photos/id/656/300/300";

    if (img.getAttribute("src") == firstImg) {
        img.setAttribute("src", secondImg);
    }
    else {
        img.setAttribute("src", firstImg);
    }

}

//////////////////////////////////////
function startAuto(){
     setInterval(chImg,1000);
}

function showValue(){
    let input= document.getElementById("name");
    alert(" your text is changed : "+ input.value);
}
let p = document.getElementById("paragraph");

function over(){
    p.textContent="Stop Hovering over me !!!!";
    p.style.color= "red";
    p.style.fontWeight="bold";
}
function out(){
    p.textContent="Thank you for leaving me alone  !!!!";
    p.style.color= "green";
    p.style.fontWeight="bold";

}