let btn = document.getElementById("myBtn");
let btn2 = document.getElementById("btnImg");
let img = document.getElementById("myImg");


function init() {
    btn.style.left = "150px";
    btn.style.top = "0px";
    btn.style.position = "relative";
    img.style.position = "relative";
    img.style.left = "0px";
}


btn.addEventListener("click", function () {

    this.style.left = parseInt(this.style.left) + 10 + "px";
    this.style.top = parseInt(this.style.top) + 10 + "px";
    //alert(parseInt(this.style.left));

});
function moveRight() {
    img.style.left = parseInt(img.style.left) + 10 + "px";

}
function animationJs(){
    document.getElementById("myImg").animate([ 
        {transform : 'translateX(0px)' },      
        {transform : 'translate(300px,0px)'},
        {transform : 'translate(300px,300px)' },
        {transform : 'translate(0px,300px)' },
        {transform : 'translate(0px,0px)' }        
        
      
     ],{ duration:2000, iterations:Infinity}
     );
} 

btn2.addEventListener("click", function () {

    //setInterval(moveRight, 20);
    animationJs();

});

window.onload = init();