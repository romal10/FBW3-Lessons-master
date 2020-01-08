// let imgTag=document.getElementById("dragImg");
// let dropDiv=document.querySelectorAll(".dragdrop");
// imgTag.addEventListener("dragstart",start);
// for( div of dropDiv) {
//   div.addEventListener("drop",drop);
//   div.addEventListener("dragover",dragOver);  
// }

function start(e){
    e.dataTransfer.setData("content",e.target.id);  
    
}
function drop(e){
    e.preventDefault();
    let data = e.dataTransfer.getData("content");
    let img = document.getElementById(data);
    e.target.appendChild(img);
    e.target.className="dragdrop";
}
function dragOver(e){
    e.preventDefault();
}
function dragEnter(e){
    e.preventDefault();
    e.target.className+=" hovering";
}
function dragLeave(e){
    e.target.classList.remove("hovering");    
}
