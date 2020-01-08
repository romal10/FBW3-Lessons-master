class Person {
    constructor(name,age){
        this.name= name;
        this.age=age;
    }
    greeting(){
        console.log(`Hi my name is ${this.name} and my age is ${this.age}`)
    }
}


function getTime(){
    console.log( ` the time is : ${new Date().getHours()} :  ${new Date().getMinutes()}`)
}

module.exports = Person;        // default export 
module.exports.time= getTime;  // named export 

// export a string
module.exports.msg = "Hello from node js";

//export {getTime} ;  this is es6 is not node js 
//export default Person;