function start(){

 for(let  i = 0 ; i < 5 ; i++){
      console.log(i);
 }
 //console.log(i);

}

start();

/////////////////////////////777

function start2(){
    for(let i = 0 ; i < 5 ; i++){
        if(true){
            var color ="blue";
        }
    }
    console.log(color);
}

start2();


///////////////////////////////////////////

var myColor = "red";
console.log(window.myColor);   // red 

let age = 30;
console.log(window.age);  // undefined


const userColor = "lightblue";
//userColor= "red";
console.log(userColor);

for(let i = 0 ; i< 5 ;i++){
     
    console.log(i);
}

/////////////////////////////////////////////////////////
// const object 

const car = {
    name:"Mercedes" ,
    color: "black",
    model:"amg",
    year: 2010,
    
    carInfo:function(){
        console.log(this.name +" made in " + this.year);

    },
    age : 9   
    
};
console.log(car.carInfo());
car.name= "BMW";
console.log(car.name);
console.log(car.year);
console.log(car.carInfo());

//car = { name:"Fiat", year:"2000" };

console.log(car);

///////////////////77777
//const  Array

const drink = ["water","cofee","milk","tea"];

drink[4]="green Tea";

console.log(drink);

drink[3]="Lemon Juice";

console.log(drink);

drink = ["green Tea","Bier","cappuccino","tea"]; // EROOR not Allowd

console.log(drink);