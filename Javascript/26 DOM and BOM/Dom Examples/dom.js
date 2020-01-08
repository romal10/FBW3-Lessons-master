// // console.log(document.URL);
// console.log(document.title);
// document.title="welcome";
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent="HELLO";
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);
// document.images[0].src="https://picsum.photos/id/846/200/200";
// document.links[0].href="https://facebook.com";
// let items = document.getElementsByClassName("list-group-item");
// console.log(items);
// for(let i = 0;i< items.length;i++){
//     items[i].style.color="yellowgreen";
// }items[3].textContent="<h3>this is the last item</h3>"; // this is the last item
// items[3].innerHTML="<h3>this is the last item</h3>";    //<h3>this is the last item</h3>
// items.style.color="red"; // givew error


let header = document.querySelector("#main-header");
header.style.borderBottom = "solid 7px #ccc";
console.log(header);
let input = document.querySelectorAll("input")[1];
input.placeholder = "welcome in DCI";
input.value = "Hello";
let btn = document.querySelector('input[type="submit"]');
btn.style.background = "lightblue";
let item = document.querySelector(".list-group-item");
item.style.color = "blue";
let lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.color = "red";
let secondItem = document.querySelector(".list-group-item:nth-child(2)");
console.log(secondItem);
secondItem.style.color = "yellow";

let titles = document.querySelectorAll(".title");
titles[1].textContent = "Hello";

let odd = document.querySelectorAll("li:nth-child(odd)");
// console.log(odd);
let even = document.querySelectorAll("li:nth-child(even)");
for (let i = 0; i < odd.length; i++) {
    odd[i].style.background = "#c4c4c4";
    even[i].style.background = "#eee";
}

let itemList = document.querySelector("#items");
console.log(itemList.parentNode);
itemList.parentNode.style.background = "#f4f4f4";

console.log(itemList.parentNode.parentNode.parentNode);
console.log(itemList.parentElement.parentElement);
console.log(itemList.childNodes);
console.log(itemList.children);
for (let i = 0; i < itemList.children.length; i++) {
    itemList.children[i].style.borderBottom = "3px solid yellowgreen";
}
itemList.firstElementChild.style.background = "lightgreen";
itemList.lastElementChild.textContent = "i am the last element child";
console.log(itemList.nextSibling);
console.log(itemList.children[2].nextElementSibling);
itemList.children[1].nextElementSibling.textContent += " Next Element Sibling";
itemList.children[1].previousElementSibling.textContent += " Previous Element Sibling"


//create a div 
let newDiv = document.createElement("div");
// add class

newDiv.className = "card card-body";
// add new attr
newDiv.setAttribute("myAttr", "Hello World");

// create text node

let textDiv = document.createTextNode("Hi im new text node for the div");
newDiv.appendChild(textDiv);
console.log(newDiv);
// insert the newDiv before the div : main


let container = document.querySelectorAll(".container")[1];
console.log(container);

let mainDiv = document.querySelector("#main");
newDiv.style.fontSize = "1.6em";
container.insertBefore(newDiv, mainDiv);


// create new li befor the first one
let newLi = document.createElement("li"); //create new li 
liText = document.createTextNode("im the new li :)"); // create text 
newLi.appendChild(liText); //add the text to the li 
newLi.className = "list-group-item"; // we add the class to the li 
let itemParent = document.querySelector("#items"); // we select the parent 
let firstLi = document.querySelector(".list-group-item") // we select the element where we insert before
itemParent.insertBefore(newLi, firstLi); // we insert the new li before the first li 


// ANOTHER WAY to create new li befor the first one
// // create new li befor the first one
// let newLi = document.createElement("li"); //create new li 
// newLi.textContent="im the new li :)";
// newLi.className="list-group-item"; // we add the class to the li 
// let itemParent=document.querySelector("#items"); // we select the parent 
// let firstLi=document.querySelector(".list-group-item") // we select the element where we insert before
// itemParent.insertBefore(newLi,firstLi); // we insert the new li before the first li 


let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", btnClick);

function btnClick(e) {
    document.getElementById("header-title").textContent = "changed";
    console.log(e);
    console.log(e.target.classList);
    document.getElementById("output").innerHTML = "<h3>" + e.target.className + "</h3>";
    console.log(e.type);

}
let form = document.getElementById("formItems");
form.addEventListener("submit", addItem);
let ul = document.getElementById("items");

function addItem(e) {
    e.preventDefault(); // prevent submitting the form
    // get the input value 
    let newItem = document.getElementById("item").value;
    // create new li element
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newItem));
    // selecting the ul
    // adding the li to my ul
    ul.appendChild(li);
    // create delete button
    let delButton = document.createElement("button");
    delButton.className = "btn btn-danger btn-sm float-right delete";
    // append text to the delete button 
    delButton.innerHTML = "X";
    // another way
    //delButton.appendChild(document.createTextNode("X"));
    //append the del Button to the li 
    li.appendChild(delButton);

    // we add here the notification div 
    let infoDiv=document.createElement("div"); // create the info div
    infoDiv.className="alert alert-success"; // add the bootstrap class 
    infoDiv.textContent="the item has been added"; // add the text
    let father = document.getElementById("main"); // the father div    
    let heading2=document.querySelector(".title"); // the h2 
    father.insertBefore(infoDiv,heading2); // inserting the div before the h2
    setTimeout(function(){  infoDiv.remove();   },2000);
}


ul.addEventListener("click", removeItem);
function removeItem(e) {
    //  console.log(e.target.className);
    
    if (e.target.className == "btn btn-danger btn-sm float-right delete") {
        if(confirm("are you sur!!!")){
            ul.removeChild(e.target.parentElement);
        
        }
        
    }
    console.log(e.target.classList);

    //another way 
    //  if(e.target.classList.contains("delete")){
    //     ul.removeChild(e.target.parentElement);   
    //  }


    // if(e.target.classList.contains("btn-danger")){
    //     console.log("the class is found");
    //     console.log(e.target.classList);
    // }
    // else {
    //     console.log("the class not found");
    //     console.log(e.target.classList);
    // }

}

// filter to sesrch items
let inputFilter = document.getElementById("filter");


inputFilter.addEventListener("keyup", filterItems);
function filterItems(e) {

    let text = e.target.value.toLowerCase();
    //console.log(text);
    // get all li
    let liItems = ul.getElementsByTagName("li");
    //console.log(liItems);
    for (let i = 0; i < liItems.length; i++) {
        let liText=liItems[i].firstChild.textContent;
        
        if(liText.toLowerCase().indexOf(text)!= -1){
            console.log(liText);
            liItems[i].style.display="block";
        }
        else{
            liItems[i].style.display="none";
        }



    }

}
