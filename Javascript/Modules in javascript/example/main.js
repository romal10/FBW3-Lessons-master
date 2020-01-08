import Person,{printName,printAge} from './person.js';
let person = new Person("Romal",25);
console.log(person);
printName(person);
printAge(person);


// import p, {printName as pName,printAge as pAge} from './person.js';

// let person = new p("Romal",25);
// console.log(person);
// pName(person);
// pAge(person);

// to import all from person.js 
// import * as p from './person.js';
// let person = new p.default("Ali", 22);
// console.log(person);

// p.printName(person);
// p.printAge(person);


//without the default export
// let obj = {
//     name:"Mahdiah",
//     age:20
// };
// p.printAge(obj);








