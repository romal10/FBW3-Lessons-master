// using of pop and push in arrays

let colors = ["orange", "pink", "green"];

console.log(colors);
colors.push("blue");
console.log(colors);
// the array will be ["orange","pink","green","blue"]

//pop is used to remove the last element from array
console.log(colors);
colors.pop();
console.log(colors);
let col = colors.pop();
// it return green
console.log(col);
console.log(colors);

//shift and unshift
let fruits = ["apple", "mango", "banana"];

//shift is used to remove an element from the first of the array
console.log(fruits);
fruits.shift();
console.log(fruits);

//unshift is used to add elements to the first of arrays
fruits.unshift("ananas");
console.log(fruits);
fruits.unshift("blueberries", "avocados");
console.log(fruits);
fruits.push("lemon", "orange");
console.log(fruits);

//indexOf is used to get the index of an element 
console.log(fruits.indexOf("orange"));
console.log(fruits);
// [ "blueberries", "avocados", "ananas", "mango", "banana", "lemon", "orange" ]
//       0             1          2        3        4         5         6
//we copy the elements banana,lemon,orange to a new array using slice() 
let myFruits = fruits.slice(3, 4);
console.log(myFruits);  //mango

myFruits = fruits.slice(3, 5);
console.log(myFruits);  // mango , banana

myFruits = fruits.slice(1, 5);
console.log(myFruits);  // avocados, ananas, mango, banana

myFruits = fruits.slice(1, 6);
console.log(myFruits);  // avocados, ananas, mango, banana,lemon

myFruits = fruits.slice(1, 7);
console.log(myFruits);  // avocados, ananas, mango, banana ,lemon , orange

// when we use slice() without indexes then it will copy the array

let newFruits = fruits.slice();
console.log("this is a copy from fruits ");
console.log(newFruits);


//splice() is used to delete elements form an array
console.log("******** before splice ************")
console.log(newFruits);
console.log("******** before splice ************")
//blueberries", "avocados", "ananas", "mango", "banana", "lemon", "orange"
//     0             1           2       3         4         5         6
newFruits.splice(1, 3);
console.log(newFruits);  // "avocados", "ananas" are deleted
 //blueberries","mango", "banana", "lemon", "orange"




 // forEach loop for arrays


 let cars= ["bmw","Audi","mercedes","fiat"];
 for(let i=0; i<cars.length;i++){
     document.write(cars[0]);

 }


 /// with forEach()

 cars.forEach( function(blabla) {  console.log(blabla);    });


 let num= [1,2,3];
 num.forEach( function(n){ 
      n=n+10;   
      console.log(n); 

});

 for(let i=0; i< num.length; i++){
     num[i]=num[i]+ 10 ;
     console.log(num[i]);
 }

 let food = ["apple","kebab","dönner"];
 

 //food.forEach( function(f){ console.log(f);  }   );  // the same of :

//  food.forEach( myfood  );

//  function myfood(foodname){
//      alert(foodname);

//  }

 food.forEach( myfood  );

 function myfood(foodname){
     console.log(foodname);

 }

 let weekdays= ["mo","tu","we","th","fr","sa","so"];
 //               0    1    2    3    4    5    6
 weekdays.forEach(printdays);

 function printdays(item,index)
 {
   console.log(item +  "   " + index );
 }
// we print the array using for loop

// for(let i =0 ; i<weekdays.length; i++)
// {
//     console.log( weekdays[i] + "   " + i  );
// }
function printArrDays (item,index,arr){

 console.log(index);
 console.log(arr[index]);
}

weekdays.forEach(printArrDays);

weekdays.forEach( function(item,index,arr){ console.log("the day is " + item);              } );

//print the array element by multi every element with 9 USING forEach
let numbers= [1,4,5,6,7,8,9];
