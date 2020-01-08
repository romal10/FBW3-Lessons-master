function start() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}

start();

// var =>function scope
// ES6 => let, const => block scope

function start2() {
    for (let i = 0; i < 5; i++) {
        if(true){
            var color = "blue";
        }

    }
    console.log(color);
}

start2();


var color = "red";
let age = 30;


const name = "firstName";
name = "MM";

