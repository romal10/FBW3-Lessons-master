const http = require('http');
const server = http.createServer((request,response)=>{
    response.setHeader('Content-Type','text/plain');
    response.statusCode= 200;
    response.end('Hello from node js');

});
server.listen(5000,'127.0.0.1',()=>{
    console.log('Listening to port 5000');
})
