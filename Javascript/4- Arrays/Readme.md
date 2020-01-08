## Arrays in Javascript 

#why we use Arrays:

Suppose I wanted to model a group of colors:

let color1="Red";
let color2="Green";
let color3="Blue";
let color4="White";
let color5="Yellow";
let color6="Black";
let color7="Gray";


This is a lot of code, and it doesn't let us group the colors together


This is a perfect use case for an ARRAY

let colors= ["Red","Green","Blue","White","Yellow","Black","Gray"];
**Arrays let us group data together in lists**

["Red","Green","Blue","White","Yellow","Black","Gray"]

   0      1      2       3        4       5       6

   Array are indexed starting at 0.  Every slot has a corresponding number

   console.log(colors[0])    // Red

   colors[0] + " with "  colors[2]    // Red with Blue

   #we can also update arrays 

   let friends= ["Steven","Jack","Maike","Anna"];
   friends[0]= "Carl";
   friends[1]="David";

   ["Carl","David","Maike","Anna"];
      0       1        2      3

      #we can also add new data 

       let friends= ["Steven","Jack","Maike","Anna"];
       friends[4]="Mara";

       //We can initialize an empty array two ways:
       let friends = [];   //no friends :(
       // var friends = new Array() //uncommon

       **Arrays can hold any type of data
       let collection=[44,"green",true,null];

       **Arrays have a length property**

       let nums=[33,6,9,44,100];
       nums.length     //4
       

    







  










