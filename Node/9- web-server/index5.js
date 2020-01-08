const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => { 
    response.setHeader('Access-Control-Allow-Origin', '*');  
    
     switch (request.url){
         case '/' :
            fs.createReadStream(__dirname + '/index5.html').pipe(response);
            break;

        case '/api' :
            response.setHeader('Content-type', 'application/json'); 
            response.writeHead(200); // status code 200 / ok   
            let data = {
                firstName :'john',
                lastName : 'Doe',
                job : 'web Developer',
                skills: { React :"90 %", javascript: "80 %" ,php :"50 %" , python : "60 %" }
            };
            response.end(JSON.stringify(data));
            break;

            default :             
            response.writeHead(404);
            response.end("bad gateway");
     }
     




    // if(request.url ==='/'){
        
    //     fs.createReadStream(__dirname + '/index5.html').pipe(response);
    // }
    // else if (request.url ==='/api'){

    //     response.setHeader('Content-type', 'application/json'); 
    //     response.writeHead(200); // status code 200 / ok   
    //     let data = {
    //         firstName :'john',
    //         lastName : 'Doe',
    //         job : 'web Developer',
    //         skills: { React :"90 %", javascript: "80 %" ,php :"50 %" , python : "60 %" }
    //     };
    //     response.end(JSON.stringify(data));
    // } 
    // else {
    //     response.writeHead(404);
    //     response.end("bad gateway");

    // }

  
    
     console.log("you are in : ",request.url)

});
server.listen(5000, () => {
    console.log('Listening to port 5000');
});
