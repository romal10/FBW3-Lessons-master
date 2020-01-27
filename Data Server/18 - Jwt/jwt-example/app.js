const express = require('express');
const jwt = require('jsonwebtoken');
 const bodyParser = require('body-parser');
const app = express();
 app.use(bodyParser.json());
 app.use(express.urlencoded({ extended: true }));
​
 app.get('/api', (req , res ) => {
    res.json({
        message : ' Welcome to Json web token '
    });
});
app.post('/api/test' , (req,res)=> {
    console.log(req.headers);
    
    res.send(req.body)
})
​
app.post('/api/posts' ,verifyToken ,(req , res )=> {
    console.log(req.headers)
    jwt.verify(req.token ,'dude secret key' , (err , authData)=> {
        if(err) {
            res.status(403).send(' error...');
        }
        else {
            res.json({ 
                message : ' Data created .... '
            });
​
        }
​
    })
   
});
const user = {
    id : 123,
    username :'Mansour',
    email:'manaour@gmail.com'
}
app.post('/api/login' , (req ,res)=> {
    
       
    // create a token
    jwt.sign( {  user } , 'dude secret key' , (err , token)=> {
        
        res.json({
             token
             
        })
        
    })
​
});
​
​
// verify the token 
function verifyToken(req, res , next){
    // get the header value 
    const headerInfo = req.headers['authorization'];
    console.log(headerInfo);
    if(typeof headerInfo !== 'undefined'){
        const info = headerInfo.split(' ');
        
​
        req.token = info[1];
        next();
       
    }
    else {
        res.status(403).json({
            message : ' you cant post'
        })
    }
    
    
​
​
}
​
app.listen(5000 , ()=>{
    console.log('Server started on port 5000 ');
    
})