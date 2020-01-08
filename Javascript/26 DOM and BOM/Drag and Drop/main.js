let myDiv = document.getElementById("main");

myDiv.addEventListener("dragstart",start);
myDiv.addEventListener("dragend",end);

function start(){
    console.log("drag started");    
}
function end(){
    console.log("drag ended");
}
 let destDiv = document.querySelectorAll(".destination");

// for( let div of destDiv ){

//     div.addEventListener("dragover",over);
//     div.addEventListener("dragenter",enter);
//     div.addEventListener("dragleave",leave);
//     div.addEventListener("drop",drop);
    
// }

// destDiv.forEach( function(div){
//     div.addEventListener("dragover",over);
//     div.addEventListener("dragenter",enter);
//     div.addEventListener("dragleave",leave);
//     div.addEventListener("drop",drop);
  
// });

destDiv.forEach( div => {
    div.addEventListener("dragover",over);
    div.addEventListener("dragenter",enter);
    div.addEventListener("dragleave",leave);
    div.addEventListener("drop",drop);
  
});
// the same loop 
// for(let i = 0; i< destDiv.length; i++){
//     //console.log(destDiv[i]);
//     destDiv[i].addEventListener("dragover",over);
//     destDiv[i].addEventListener("dragenter",enter);
//     destDiv[i].addEventListener("dragleave",leave);
//     destDiv[i].addEventListener("drop",drop);
// }
function over(e){
    e.preventDefault();

    console.log("drag over");
}
function enter(e){
    e.preventDefault();
     console.log("drag enter");
}
function leave(){
    console.log("drag leave");    
}
function drop(){
    this.append(myDiv);

}

