

// The JavaScript this keyword refers to the object it belongs to. 

// let o ={
// carId : 123,
// getId : function(){
//     console.log(this);
//     return this.carId;
// }


// };
// console.log(o.getId());

console.log(this);

let person = {

    firstName: "Mansour",

    lastName: " Tumeh",



    fullName: function () {

        console.log(this);
        console.log("here we get the fullName");
        console.log(this.firstName + "  " + this.lastName);
        this.age = 31; // adding new property to the person object 

    }


};

console.log(person.firstName);
console.log(person.fullName());


let car = {

    name: "BMW",

    maxSpeed: "250",

    color: "blue",

    model: "i7"


}

car.year = 2019;

console.log(car);

car.info = function () {

    // this.model = "i7";

    return this.name + " " + this.color + " " + this.model;
}

console.log(car.info());

let merBenz = {

    name: "Mercedes",
    color: "Black",
    model: "A6"

};
// we use the info function from the object car in the object merBenz
console.log(car.info.call(merBenz)); // Mercedes Black A6



///////////////////////////////////////////////

let btn = document.getElementById("myBtn");
let body =document.querySelector("body");

btn.addEventListener("click", function () {

    this.style.background = "red";
    this.style.color = "white";
    this.style.fontSize = "1.7em";
    body.style.background = "#ccc";
    // this.parentElement.remove();  // to remove the parent element to remove the div
    this.remove(); // to remove  the current element button
});
