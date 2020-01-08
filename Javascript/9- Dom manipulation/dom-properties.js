let tag = document.getElementById("firstItem").style.color="red"; //selector with id

let liTags=document.getElementsByClassName("light"); // selector with calss name

liTags[1].innerHTML="List Item 3 after editing!!!" // the innerHtml of the html tag

console.log(liTags[1].innerHTML); // print List Item 3 after editing!!!

liTags[0].style.color="lightgreen"; // change the color of the list item 2 now is lightgreen

let headingTag= document.getElementsByTagName("h1"); //selector wth tag name

console.log(headingTag);

headingTag[0].innerHTML="change the tag";
headingTag[1].style.background="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,27,1) 35%, rgba(0,212,255,1) 100%)";
headingTag[1].style.color="white";
headingTag[1].setAttribute("id","myid"); //to add id 







