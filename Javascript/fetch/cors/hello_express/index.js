// import the module
var express = require('express');
// init the app
var app = express(); 

// additional headers for CORS
 app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
   });

// define routes
app.get('/', function(req, res) {
    res.send('hello world!');
});

// state route
app.get('/state', function(req, res) {
    var state = {
        'state': 'Hamburg',
        'capital': 'Hamburg'
    } 
    res.send(state);
});

app.get('/states', function(req, res) {
    res.sendFile('states.json', { root: __dirname });
});

app.get('/hamburg.png', function(req, res) {
    res.sendFile('hamburg.png', { root: __dirname });
});

//listening
app.listen(3000, function(){
    console.log("Example app started...");
});



