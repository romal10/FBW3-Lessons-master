let myList = document.getElementById("list");
console.log (myList.firstElementChild.innerHTML); // water
console.log (myList.lastElementChild.innerHTML); // Tea
console.log (myList.children[2].innerHTML); // Tea
let btn=document.getElementById("myBtn");
let btn2=document.getElementById("myBtn2");
let btn3=document.getElementById("clear");
let btn4=document.getElementById("info");
let text="";

    btn.onclick=function(){  

    let children = document.getElementById("list").children;

    for(let i = 0 ; i< children.length ; i++){

        console.log(children[i].innerHTML);

        document.getElementById("content").innerHTML+= children[i].innerHTML+"<br>"; 

    }       
  };
//btn.addEventListener("click",function(){  alert("hello")  });
//let children = document.getElementById("list").children;  // all the children inside ul
//children[0].innerHTML     // water 

let counter=0; // this the counter instead of using i in for loop
btn2.addEventListener("click",function(){

    let kids = document.getElementById("list").children;
    if(counter == kids.length){
        counter=0;
    }

    document.getElementById("content").innerHTML+=kids[counter].innerHTML;

    counter ++; 
});

btn3.addEventListener("click",function(){

    document.getElementById("content").innerHTML="";
    
});
btn4.addEventListener("click",function(){

let imgAttr=document.getElementById("myImg").attributes;

for(let i = 0 ; i < imgAttr.length ; i++){
    text += imgAttr[i].name + " = " + imgAttr[i].value + "<br>";  

}
document.getElementById("imgInfo").innerHTML= text;

});










