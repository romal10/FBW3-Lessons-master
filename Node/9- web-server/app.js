const http = require('http');
const server = http.createServer(function(req,res){

    res.setHeader('Content-type','application/json');

    res.setHeader('Access-Control-Allow-Origin','*');

    res.writeHead(200); // status code http 200 / ok 

    let dataObj = {"id":1, "name":"Mansour" ,"email":"mansour@gmail.com"}

    let data = JSON.stringify(dataObj);   

    res.end(data)

});
server.listen(1233,function(){
    
    console.log('listeninng on port 1233');

})
