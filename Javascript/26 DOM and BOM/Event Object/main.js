let input = document.querySelector("#name");

input.addEventListener("click", inputClick);

function inputClick(e) {
    let myEvent = e.clientX;
    console.log(myEvent);
}

input.addEventListener("keyup", inputKey);
function inputKey(e) {
    let k = e;
    console.log(k.altKey);
    document.getElementById("myDiv").innerHTML="<h1>"+e.target.value+"</h1>";


}

input.addEventListener("mousemove", mouseInput);
function mouseInput(e) {
    let m = e;
    console.log(m.offsetX);
//    document.body.style.background="rgb("+m.offsetX + ","+m.offsetY+ ", 66)";
   document.body.style.background=`rgb(${m.offsetX} , ${m.offsetY} , 66)`;
}

let form = document.querySelector("form");
form.addEventListener("submit",inputSubmit);

function inputSubmit(e){
     e.preventDefault();
    console.log(e.type);
   

}

