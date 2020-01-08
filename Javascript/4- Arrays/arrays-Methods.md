##push/pop
##shift/unshift
##indexof
##slice
##ForEach



#push is used to add to the end of array : 

let colors=["Red","Green","Orange"];
colors.push("Black");

// ["Red","Green","Orange","Black"]
 #we use pop to remove the last item in an array

 let colors=["Red","Green","Orange"];
 colors.pop();
 // ["Red","Green"];
 // Return the last item 

 // pop() return the removed Element 
 let col = colors.pop(); //orange



 ##shift and unshift

 #Use shift to remove the first item in an array
  
 let colors=["Red","Green","Yellow"];

 colors.shift(); 

 // ["Green","Yellow"]
 // shift();  also Return the removed element
 let col = colors.shift();  //Green   

##IndexOf
#we use indexOf to find the index of an item in an array

let fruits=["banana","apple","mango","ananas"];
fruits.indexOf("banana"); // 0 
fruits.indexOf("ananas"); // 3

// return -1 if the element is not defined.
indexOf("orange")   //-1

##slice 
#we use slice() to copy parts of an array
let fruits= ["ananas","apple","mango","orange","lemon"];
//use slice to coppy the 2nd and the 3d fruits 

let cit=fruits.slice(1,3);

//this does not alter the original fruits array
//cit contains ['apple','mango']
fruits contain  ["ananas","apple","mango","orange","lemon"];

//we can also use slice() to copy an entire array
let nums=[1,2,3];
let newNums=nums.slice();
//both arrays are [1,2,3]



##Splice 
##we Use splice to remove
let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
//use splice to remove 'Orange' from the array
//specify index of the element to be removed and 
//how many elements should be removed from that index
fruits.splice(1, 1);
// returns: ["Orange"]
console.log(fruits);
// prints: ["Banana", "Lemon", "Apple", "Mango"]




##forEach

#JavaScript provides an easy built-in way of iterating over an array: ForEach
arr.forEach(someFunction)

let colors = ["red", "orange","yellow", "green"];

colors.forEach(function(color){
//color is a placeholder, call it whatever you want
  console.log(color);
});


//with a for loop
let colors = ["red", "orange", "yellow", "green"];

for(var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}


//using forEach
let colors = ["red", "orange","yellow", "green"];

colors.forEach(function(color){
  console.log(color);
});