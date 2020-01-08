let btn = document.getElementById("btn");

// btn.addEventListener("click",function(e){
//    console.log(e);
// });


btn.addEventListener("click",btnClick);

function btnClick(e){
    //console.log(e.target);
    setTimeout(hideDiv,2000);

}
function hideDiv(){
    div.style.display="none";
}


let div = document.getElementById("myDiv");
div.addEventListener("click",divClick);

function divClick(e){
    //console.log(e.target.style.height);
    //console.log(e.target.innerHTML);
}

let input = document.getElementById("fName");
input.addEventListener("keyup",inputKeyUp);

function inputKeyUp(e){
    // selecting the h1  and we change the text inside h1
    document.querySelector("h1").textContent=e.target.value;
    //console.log(e.target.value);
}



