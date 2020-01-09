let faker = require ('faker');
faker.local = 'de';

let newName = faker.name.findName();
let newEmail = faker.internet.email();
let newCard = faker.helpers.createCard();
let productName = faker.commerce.productName();
let price = faker.commerce.price();


console.log(newName,newEmail);
console.log(`${productName} cost: ${price}  €`);
console.log(faker.date.month());
//console.log ( newCard);