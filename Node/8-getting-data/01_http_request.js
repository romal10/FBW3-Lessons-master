// npm install request
const request = require('request');
// npm install axios
const axios = require('axios');

let link = 'https://jsonplaceholder.typicode.com/todos/1';

// using request
/*
request(link, { json: true }, (err, res, data) => {
    // error handler
    if(err) {
        return console.log(err);
    }
    // console.log(res);
    console.log(data);
});*/

//using axios
link = 'https://jsonplaceholder.typicode.com/users';
axios.get(link).then(response => {
    console.log(response.data);
}).catch(error => {
    console.log(error);
})