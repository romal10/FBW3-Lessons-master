let myDiv = document.getElementById("divToStyle");

let btn = document.querySelectorAll("button");
function txtBold(){
    myDiv.style.fontWeight="bold";
}
//function txtItalic(){
  //  myDiv.style.fontStyle="italic"; 
//}
//btn[1].addEventListener("click",txtItalic); 

btn[0].addEventListener("click",txtBold);
btn[0].addEventListener("mouseover",function() {
 btn[0].style.fontWeight="bold";
});
btn[0].addEventListener("mouseout",function() {
    btn[0].style.fontWeight="normal";
   });
   

btn[1].addEventListener("click", function() { myDiv.style.fontStyle="italic";  }  );


