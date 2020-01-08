class Person {

    constructor(firstName, lastName, birthday, adress) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday; // 18.07.2000
        this.adress = adress;
    }

    greeting() {
        alert("Hello " + this.firstName + "  " + this.lastName);
    }

    getBirthDay() {
        
        let today = new Date();
        let day = today.getDate();
        
        let month = today.getMonth();
        
        let personDate = new Date(this.birthday);       


        if (day == personDate.getDate() && month == personDate.getMonth()) {
            alert("Happy Birthday " + this.firstName);

        }
        else {
            alert("Sorry today is not your birthday");
        }


    }
}

class Student extends Person {
    constructor(firstName, lastName, birthday, adress, id, university) {
        super(firstName, lastName, birthday, adress);
        this.id = id;
        this.university = university;
    }
    getAge() {
        let currentDate = new Date(); // the cuurent date of today
        let year = currentDate.getFullYear()        //2019 

        let birthDate = new Date(this.birthday);
        return year - birthDate.getFullYear()  //2019 - 2000

    }
    studentInfo() {
        // all info about the student 
    }


}

let s = new Student("john", "smith", "2000-05-20", "New York", 255, "New York university");
//alert(s.getAge());
//console.log(s.firstName + " " + s.lastName + " is " + s.getAge() + " years old" ); 

let john = new Person("John", "Smith", "1990-07-19", "Hamburg");
console.log(john.getBirthDay());