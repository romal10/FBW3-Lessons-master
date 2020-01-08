let colors = ["red", "blue", "green"];

let colors1 = ["orange", "lightblue", "pink"];
let allColors = colors.concat(colors1);
console.log(allColors);
//[ "red", "blue", "green", "orange", "lightblue", "pink" ]
//   0       1         2      3          4           5

console.log(allColors.slice(1, 3)); // [ "blue", "green" ]


console.log(allColors.slice(1, 5));
// [ "blue", "green", "orange", "lightblue" ]

console.log(allColors.slice(0, 4));

//[ "red", "blue", "green", "orange" ]

// Array.splice to add elements and remove elements to/from array

// Array.splice(index,howmany,"item1,"item2")

// if howmany = 0 then nothing will be removed 

let cars = ["bmw", "ford", "fiat"];
console.log(cars);                  // [ "bmw", "ford", "fiat" ]

cars.splice(0, 2, "mercedes", "audi"); // [ "mercedes", "audi", "fiat" ]

console.log(cars);

cars = ["bmw", "ford", "fiat"]; // to rset the array agin
console.log(cars);   //  // [ "bmw", "ford", "fiat" ]

cars.splice(1, 1, "mercedes", "audi");
console.log(cars);  // [ "bmw", "mercedes", "audi", "fiat" ]


///////////////////////////////////////////////////////////
// Array.find() return the first item when the test is passed


let food = ["banana", "ananas", "mango", "apple"];


function check(foodName) {

    return foodName == "apple";

}

console.log("we are searching for apple : " + food.find(check));

//////////////////////////////////////////////

let person = [{ name: "Anna", work: "doctor" },

{ name: "Eric", work: "Hair Dresser" },
{ name: "David", work: "web developer" },
{ name: "Mansour", work: "web developer" }

];

function isWebDeveloper(employee) {  // this function is return true or false 

    return employee.work == "web developer";
}
console.log("the web developer is :  " + person.find(isWebDeveloper).name);
console.log("the index of the web developer is :  " + person.findIndex(isWebDeveloper));



///////// findIndex()   return the first index when the test is passed

// after reverse the array  : 
person.reverse(); console.log(person);
console.log("the web developer is :  " + person.find(isWebDeveloper).name);

console.log("the index of the web developer is :  " + person.findIndex(isWebDeveloper));

console.log(person.filter(isWebDeveloper));  // we search for all web developers 


//////////////////////////////////////////////
//Array.filter(function) create an array filled with all array elements that pass a test 
//(provided as a function)
let age = [15, 18, 30, 55, 60, 13, 22, 75, 70];
console.log(age.sort()); // to sort the array


function canDrive(driverAge) {
    return (driverAge >= 18 && driverAge <= 70);

}
let drivers = age.filter(canDrive);
console.log(drivers.sort());
////////////////////////////////////////////////////////////////////////////////////

// array.reduce(function)
let cities = [
    {
        city: "Hamburg",
        population: 1000000
    },
    {
        city: "Berlin",
        population: 2000000
    },
    {
        city: "stuttgart",
        population: 700000
    }


];

function sumOfPupulation(total, num) {
    return total + num.population
}
let allpopulation = cities.reduce(sumOfPupulation,0);
console.log("population  is: " + allpopulation);

//////////////////////////////////////////////////////////////////////
let numbers = [8,2,10,20];

function sumNumbers(sum ,element){
    return sum + element ;
}

let reducedNumers = numbers.reduce(sumNumbers); // the sum : 40 
console.log(reducedNumers);

reducedNumers = numbers.reduce(sumNumbers,10); //the sum with initial vlaue : 10  // the sum is : 50

console.log(reducedNumers);


//////////////////////////////////////////////////
let names= ["Alice","Bob","john","Alice","Carl","Bob"];

// the expected result is {"Alice:2","Bob:2","john:1","Carl:1"}


function countNames(allNames,name){
    if(name in allNames){ // if the name is repeated 
        allNames[name]++;
    }
    else {
        allNames[name]=1;
    }
    return allNames;
}
let counted= names.reduce(countNames,{});

console.log(counted);
////////////////////////////////////777

// map function in arrays

let arr= [2,4,8,10];
 function multi(number){
     return number * 2;

 }
 let newArr= arr.map(multi);
 console.log(newArr);

///////////////////////////////////////////////

 multi = function(number){   return number * 2; }
 multi = (number) => {   return number * 2;   } 
 multi = number => {   return number * 2;   } 
 multi = number => number * 2  

let callMe = () => {  console.log("Hello");    }  // no Arguments 

newArr= arr.map(multi);
newArr= arr.map(number => number * 2); // the shortest way

console.log("using arrow function : "+ newArr);
////////////////////////////////////////////////////////7


var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]

function matLength(material){
    return material.length;
}
console.log(materials.map(matLength));



