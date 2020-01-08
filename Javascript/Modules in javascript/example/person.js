class Person {
    constructor(name,age){
        this.name = name;
        this.age= age;
    }

}

 function printName(human){
    console.log( `the name is ${human.name} `);  
}

 function printAge(human){
    console.log(`the age is ${human.age}`);
}

export  {printName,printAge};
export default  Person;


