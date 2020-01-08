const https = require('https');
const options = {
    hostname: 'jsonplaceholder.typicode.com',
    port: 443,
    path: '/todos/1',
    method: 'GET'
}

// 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
// 'https://jsonplaceholder.typicode.com/todos/1'
https.get(options, (resp) => {
    let data = '';

    // receive a chunk of data
    resp.on('data', (chunk) => {
        data += chunk; 
    }); 

    // the whole resp has been received
    resp.on('end', () => {
        console.log(JSON.parse(data));
    });
}).on("error", (err) => {
    console.log("Something went wrong: " + err.message);
});

// 
const options_2 = {
    hostname: 'jsonplaceholder.typicode.com',
    port: 443,
    path: '/todos/2',
    method: 'GET'
}
const request = https.request(options_2, response => {
    console.log(`statusCode: ${response.statusCode}`)

    response.on('data', d => {
        console.log(JSON.parse(d));
    })
})

request.on('error', error => {
    console.error(error);
})

request.end();