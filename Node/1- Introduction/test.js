const  greet = function(msg){
   console.log(msg);
}

let person = {
    name:'Peter',
    job:'Node js Developer'
}

let message ="Hello from the other side";
//greet('Good morning');

 module.exports = greet;
 module.exports.p = person;

