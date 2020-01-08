const express = require('express');
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017";


const app = express();

app.listen('3005' ,()=> {
    console.log(' Server started on port 3005');
    
});
app.get('/',(req,res)=> {
    res.send('<h2> welcome to MongoDB project homepage </h2>');

});



app.get('/first',(req,res)=> { 

    // get the first row in the articles collection 
    MongoClient.connect(url , (err, db)=>{
        if(err) throw err;
        let mydb = db.db('shop');
        mydb.collection('articles').findOne({},(err,result)=>{
            if(err) throw err ;
            console.log(result);
            res.send(result)
            db.close();
    
        })
    
    });


});

// get all the list of the articles 
app.get('/all',(req,res)=>{

 MongoClient.connect(url , (err , db)=> {
     if(err) throw err ; 
     let shop = db.db('shop');
     shop.collection('articles').find({price : { $lt :700 }}).toArray((err , result)=>{
        if(err) throw err ;
        res.send(result);
        db.close();

     })

 })
    
})