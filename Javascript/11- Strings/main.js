let str = "Hello World";
console.log(str.length);  // 11
console.log(str[0]);   // H

 
console.log(str.charAt(6)); // return character at specific index   // W

console.log(str.charCodeAt(1)); // 101

let str1 = "we are learning";
let str2=  " javascript";
let str3= str1.concat(str2); 

console.log(str3); // we are learning javascript

console.log("the index of javascript is "+str3.indexOf("javascript")); // 16 
console.log(str3.indexOf("php"));  // return -1 

str1.match("we are learning");

console.log(str3.search("we"));  // 0

console.log(str3.search("le"));  //7 
console.log(str3.search("t")); // 25
console.log(str3.search(str1)); // 0

console.log(str3.slice(0,6)); // we are 

console.log(str3.slice(8,15)); //earning

// split creart array from the string 

console.log(str3);

let strArray=str3.split(" ");

console.log(strArray);

let strArray2 = str3.split("*");

console.log(strArray2);
//////////////////////////////////////
let str4= "Hi*How*Are*you";

let strArray3 = str4.split('*');
console.log(str4);
console.log(strArray3);

// split with limit 

let fruit = "Apple are round and apples are juicy";

let arrFruit= fruit.split(" ",3); // we use limit just 3 element

console.log(arrFruit); // [ "Apple", "are", "round" ]

 ////////////////////////////////////////////////////////
// startsWith search for a string in the start and return True or False 
 fruit.startsWith("Aplle");   //true
 fruit.startsWith("aplle");   //false
 //////////////////////////////

 //substr use start and length
 console.log(fruit);
console.log("with substr(5,10) : "+fruit.substr(5,10)); // are round
console.log("with slice(5,10) : "+fruit.slice(5,10)); // are

//substring use start and end 
console.log("fruit.substring(2)="+ fruit.substring(2) ); // to the end of the string
//ple are round and apples are juicy
console.log("fruit.substring(2,7)="+ fruit.substring(2,7) ); //
//ple a

// toUpperCase() 
console.log(fruit.toUpperCase()); // APPLE ARE ROUND AND APPLES ARE JUICY

// to LowerCase()
console.log(fruit.toLowerCase()); // apple are round and apples are juicy

// trim() to remove the whitespaces 
let food="       Döner Apple Kepap banana";
console.log(food);
console.log(food.trim());


// toString to convert object to string 
let colors=["red","green","yellow","gold"];
console.log(colors);
console.log(colors.toString());


// Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.

let text = "i can walk in the park all day!";


function convert(str){
    let newArr = str.split(" ");

    for(let i = 0; i < newArr.length; i++){
        newArr[i][0]=newArr[i].toUpperCase();
        console.log(newArr[i]);
    }
    console.log (newArr);
}










