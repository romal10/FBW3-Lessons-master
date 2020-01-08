const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
   
    response.setHeader('Content-type', 'text/html');    

    response.setHeader('Access-Control-Allow-Origin', '*');     

    response.writeHead(200); // status code 200 / ok
  
    let data =`<div>
               <h2 style="color:lightblue"> welcome to Node Js <h2>
              <img src='https://picsum.photos/500/500' />
             </div>`;

    response.end(data);   

});
server.listen(1233, () => {
    console.log('Listening to port 1233');
});
