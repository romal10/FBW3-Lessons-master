// local storage

// localStorage.setItem('myCat','Tom'); 

let catName=localStorage.getItem('myCat');

document.getElementById('cat').innerHTML="my Cat Name is :  " + catName;

let person ={
    name:"John",
    age:35,
    job:"web developer",
    city:"Hamburg"
};

//convert from object to string 
let strPerson = JSON.stringify(person);

 localStorage.setItem('personInfo',strPerson);

let objPerson=localStorage.getItem('personInfo');
// converting to object
document.getElementById("person").innerHTML=JSON.parse(objPerson).city;



