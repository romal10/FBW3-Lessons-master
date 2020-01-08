
//document.getElementById("main").appendChild(heading);
//document.querySelector("body").appendChild(heading);
let mainDiv = document.getElementById("main");
function addElement(){
    
    let heading = document.createElement("h1");
    let text = document.createTextNode("this is h1 inside the main div");
    heading.appendChild(text);
    document.getElementById("main").appendChild(heading);
}
function addElement2(){
    let heading = document.createElement("h1");
    heading.innerHTML="this is h1 inside the main div";
    heading.style.color="lightgreen";
    document.getElementById("main").appendChild(heading);
}
document.getElementById("btn").addEventListener("click",function(){
    addElement();
    let el = document.getElementsByTagName("h1");

for (i = 0; i < el.length; i++) {
    el[i].onclick = function() {      
        mainDiv.removeChild(this);
        //this.style.display = "none";
    }
  }
});
// append child
document.getElementById("btn2").addEventListener("click",function(){
    
    addElement2();
    let el = document.getElementsByTagName("h1");

    for (i = 0; i < el.length; i++) {
        el[i].onclick = function() {      
            //console.log(mainDiv.childNodes[this]);
            mainDiv.removeChild(this);
            //this.style.display = "none";
        }
      }
    


    
});

//remove child from childNodes 
document.getElementById("del").addEventListener("click",function(){
  mainDiv.removeChild(mainDiv.childNodes[0]);

});

