const express = require ('express');
const jwt = require ('jsonwebtoken');

const app = express();

app.get('/api', (req, res )=>{
    res.json({
        message: 'Welcome to Json Web Token !!!'
    });
});


app.post('/api/posts', (req, res )=>{
    res.json({
        message: 'Data Created....'
    });
});

app.post('/api/login', (req, res)=>{

const user = {
    id : 123,
    usename : 'romal',
    email : 'romal@gmail.com'
}

    jwt.sign ( {user} , 'dude secret key', (err, token) =>{

        res.json ({
            token 
        })
    } )

})





app.listen(5000,()=>{
    console.log('server started on port 5000');
})

