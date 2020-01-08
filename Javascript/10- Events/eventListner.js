let img = document.getElementById("myImg");
let btn = document.getElementById("myBtn");

function changeImg(){
    if(img.getAttribute("src")=="java.jpg"){
        img.setAttribute("src","javascript.png");
    }
    else{
        img.setAttribute("src","java.jpg");
    }
    
}

btn.addEventListener("click",changeImg);

