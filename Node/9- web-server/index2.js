const http = require('http');
const server = http.createServer((request, response) => {
   
    response.setHeader('Content-type', 'text/plain');

    response.setHeader('Access-Control-Allow-Origin', '*');

    response.writeHead(200); // status code 200 / ok
    response.end('Hi from node js web server');
    if(request.url ==="/home"){
        console.log('you requested the home page')

    }

});
server.listen(1233, () => {
    console.log('Listening to port 1233');
});
