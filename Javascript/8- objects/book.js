let book = {

    name: "javascript the good part ",
    author: "John",
    year: 2016,

    bookInfo: function(){
        return "the book name is "+ this.name + "the Author : "+ this.author;
    }

};

console.log(book.bookInfo());

//console.log(book);

for (let i  in book){
    console.log(book[i]);
}

////////////////////////////////////////////

let message = "Hello world";

let greet = message;

greet = "hi there!";

console.log(message);  // Hello world
console.log(greet);  // hi there!

///////////////////////


let person = {

    name: "john",

    age:28,

    gender:"Male"
};
let user = person;

console.log(user.name);  // john

user.name="Mansour";

console.log(user.name); //Mansour
console.log(person.name);



console.log(typeof greet);


///////////////////////////////////

//let book1= { };
let book1 = new Object();    //{ };
book1.bookName=" learn javascript";
book1.authorName="John";
book1.year= 2019;

book1.info=function(){
    return this.bookName + " published in " + this.year;
}
console.log(book1.info());



 function Book(name,author,year){

     this.bookName=name;
     this.authorName=author;
     this.publishYear=year;
     this.info=function(){
         return this.bookName +" written by "+this.authorName+ " and published in " + this.publishYear;
     };

 }

 let cssBook = new Book("learn CSS in 4 days","Peter",2019);

 console.log(cssBook.info());

 for (let i in cssBook){
     console.log(cssBook[i]);
 }