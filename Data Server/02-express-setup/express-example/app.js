const express = require('express');

const app = express();
app.get('/', (request,response)=>{
    response.send('Hello World');
});
//routing 
app.get('/about',(request,response)=>{
   response.send('<h1>About Page </h1>');
   console.log(request.url);
});
app.get('/users/:name' ,(request,response)=>{
    let user = request.params.name;
    response.send('<h1>'+user+'</h1>');
})

app.listen(4000,()=>{
    console.log('we are started on port 4000');    
})