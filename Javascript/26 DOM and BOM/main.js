// alert(document.documentElement.getAttribute("lang"));

// document.body.innerHTML="body";

// document.body.innerHTML = "hello";
let elementName = document.body.firstElementChild.nodeName;
// alert(elementName);
document.body.firstElementChild.textContent="hiiiii";


//////////////////////////////////////
// we will add new h2 before h1 in the body 
let h1 =document.body.childNodes[0];
let newH2=document.createElement("h2");
newH2.innerHTML="the first h2";
document.body.insertBefore(newH2,h1);
/////////////////////////////////////////////////

// we will change the background of the p with class test to yellowgreen
let matches = document.getElementsByClassName("test");

for(let i =0 ; i< matches.length;i++){
    matches[i].style.background="yellowgreen";
}

// we will change the color to all p to #fff

  for (let el of matches){
      el.style.color="#fff";
  }
// add new paragraph before the last green element 
//and make the background red and the text : new Red Paragraph

  let lastGreenP  = matches[matches.length-1]; // we selected the last green element
  let newRedP=document.createElement("p");
  newRedP.innerHTML="new Red Paragraph";
  newRedP.style.background="red";
  document.body.insertBefore(newRedP,lastGreenP);

  /////////////////////////////777
  let paragraph= document.getElementsByTagName("p");
  console.log(paragraph.length);
  // we will change th font-weight of all p to bold using for loop 

  for(let i = 0 ; i < paragraph.length;i++ ){
      paragraph[i].style.fontWeight="bold";
      paragraph[i].style.border="2px solid grey";
  }

//////////////////////////////////////7

  

 





