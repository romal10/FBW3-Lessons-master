const http = require('http');

const server = http.createServer(function(request,response){

    response.setHeader('Content-type','application/json');

    response.setHeader('Access-Control-Allow-Origin','*');

    response.writeHead(200); // status code 200 / ok

    let jsonData = { "id":450 , "name":"DCI FBW3" ,"email":"fbw3@gmail.com" }
    let data = JSON.stringify(jsonData);

    response.end(data)

});

server.listen(1234 ,function(){

    console.log("Listening on port 1234")
})