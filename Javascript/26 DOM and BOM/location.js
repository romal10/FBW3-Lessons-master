function loadWebsite(){

    window.location.assign("https://www.github.com"); 
    // window.location.replace("https://www.google.com"); // can not click back
    //window.location.href="https://www.bing.com"; // the same with assign
}
let myBtn = document.getElementById("loctaion");

myBtn.addEventListener("click",loadWebsite);


let btn=document.createElement("button");
btn.innerHTML="learn javascript";

btn.addEventListener("click",function(){
    window.location.href="https://www.tutorialrepublic.com/javascript-tutorial";
});
document.body.appendChild(btn);

// will redirect the page to https://www.github.com after 4000 ms 

// document.body.addEventListener("load", setTimeout(loadWebsite,4000));

let back = document.getElementById("back");
let forward = document.getElementById("forward");

back.onclick=function(){
    window.history.back();
 }
 forward.onclick=function(){
     window.history.forward();
 }