 // to define array we use
//   let car=["bmw","fiat"];
//   let car=new array();
//   let car= [];

 
   
 
 let cars = {color:"white", brand:"BMW" ,year:"2019" };

 let person = { firstName:"John", lastName:"Tom" ,age:50, hairColor:"green" };

 console.log(cars);
 console.log(cars.brand);
 console.log(cars.color);
 cars.brand="Mercedes";
 console.log(cars.brand);

 person.age=66;
 person.age+=1; // incrrease age 1 
 person.age= person.age+1;  // also incrrease age 1 
 console.log(person.age);
 person.city="Hamburg";
 console.log(person.city);
 person["fav Color"]="yellow"; 
console.log(person);

//// create object 

let language= new Object();  // or let language= {};
language.name="English";
language.level="easy";
console.log(language);

let driver = { 
   age:60,
   firstname:"john",
   nationality:"UK",
   car : { brand:"ford", color:"black",year:"2012" } 
};
 
console.log(driver.car);
console.log(driver.car.color);
console.log(driver["car"].year); // another way
console.log(driver["car"]["brand"]); // another way
driver.pet= ["cat","dog"]; // array
console.log(driver.pet[0]); // cat
console.log(driver.pet[1]); // dog

// we create now array of object 

let posts = [
    { title:"cats are nice", author : "Mansour"    },
    { title:"Dogs are totaly awsome",author:"dog lover"}
   ];
console.log(posts);
posts[1].title = "Dogs are totaly cute";
console.log(posts);
posts[0].comment="nice post i like it";
console.log(posts);

posts[1].comment= ["nice thank you :) ", " noo i hate you :( "];
console.log(posts[1]);
console.log(posts[1].comment[1]);
posts[1].comment[1]= " nice post :)";
console.log(posts[1].comment[1]);
posts[1].comment[1]+= " thanks a lot";  // nice post :) thanks a lot
console.log(posts[1].comment[1]);

//WE CREATE STUDENT OBJECT
let student= {

    firstName:"Mansour",
    lastName:"Tumeh",
    id:4654,
    overThirty:true,
    fullName: function() {  
        return "the Fullname is : "+ this.firstName + "  " + this.lastName;
    }

};
console.log(student.fullName());

 //example : Create a person object. Include the person's first
//and last name, age, job, city etc. Then print text by retrieving data
//from the object e.g. "John Smith is a 41 year old engineer living in France".
let Person ={
    firstName : "John",
    lastName : "Smith",
    age : 41,
    proffesion: "engineer",
    city : "France",
    info:function() {
        return Person.firstName + " "+ Person.lastName + " is " + Person.age
        +" Year old " + Person.proffesion + " Living in " + Person.city ;

    }
};
//document.write(Person.info());


//Person.firstName= "John";  // the same
//Person.lastName= "Smith";   // the same 




// example 2 :create an array of movies objects
//  Each movie should have a title, rating and haswatched property 

//  you have watched "wanted film " is " 5 stars" 
//  you have watched "Mother film " is " 4 stars" 

let movies = [
    {
        title:"Titanic",
        hasWatched: true,
        rating: 5
    },    
    {
        title :"despicable me 3",
        hasWatched:true,
        rating:4
    },
    {
        title:"God Father",
        hasWatched:true,
        rating: 5
    },
    {
        title: "Pretty Women",
        hasWatched:false,
        rating: 3
    },
    { 
        title : "Passenger",
        hasWatched:true,
        rating : 4
    },
    { 
        title : "Harry Potter",
        hasWatched:false,
        rating : 5
    }
];

function stars(num){
    let str="";
    if(num > 5 ){  num=5;  }
    for (let i=0; i< num;i++){
        str+="&#9733;";        
    }
    return str;
}
movies.forEach(function(film){ 
    if(film.hasWatched==true){        
        console.log("You watched "+ film.title + 
        " has "+film.rating+ " Stars " + stars(film.rating) );
        
    }
    else{
        console.log("You have to watch "+ film.title + 
        " has "+film.rating+ " Stars" + stars(film.rating) )
    }
    
 });

 for(let i=0;i< movies.length;i++){
     if(movies[i].hasWatched==true){
         document.write("<div style='color:green;font-weight:bold'> you watched  " 
         + movies[i].title 
         + " has  " + movies[i].rating
         + " Stars <span style='color:gold;'>"
          + stars(movies[i].rating) + "</span></div><br><br>");
     }
     else{
        document.write("you have to watch  " + movies[i].title 
        + " has  " + movies[i].rating
        + " Stars <span style='color:gold;'>" +
         stars(movies[i].rating) + "</span><br><br>");

     }     

 }