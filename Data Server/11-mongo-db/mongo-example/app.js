const express = require('express');
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017"

// the atlas url on the cloud 
const cloudUrl = "mongodb+srv://admin:Cm9haRRCrqL6pWFQ@cluster0-uwnlc.mongodb.net/test?retryWrites=true&w=majority";

const app = express();
app.listen(3006,()=>{
    console.log('Server started on port 3006');    
});
app.get('/',(req,res)=>{
    res.send('<h3> Mongo Example homepage </h3>')
});

// GETTING THE DATA FROM OUR DATABASE
app.get('/all',(req,res)=>{
    MongoClient.connect(url, (err,db) => {
        if (err) throw err ;
        let myDatabase = db.db('online-shop');
        myDatabase.collection('articles').find({}).toArray((err , result)=>{
            if(err) throw err;
           res.send(result); 
           db.close();  
        })
    } )
});

// Create a new collection for our database : online-shop

app.get('/add', (req,res)=> {
    MongoClient.connect(url , (err , db )=>{
     if (err) throw err;
     let myDb = db.db('online-shop');
     myDb.createCollection('users' , (err, res)=> {
         if(err) throw err ;
         console.log('collection users created');
         db.close();    

     })
    })
    res.send('<h2>collection created </h2>');

});

// insert users to the databse online-shop (collection users)
app.get('/add-users',(req,res)=>{

    MongoClient.connect(url , (err , db)=> {

        if (err) throw err ;
        let myDb = db.db('online-shop');
        myDb.collection('users')
        .insertMany( [{ name : "Waleska" , email: "waleska@gmail.com", phone : 01577777777  },{ name : "Romal" , email: "Romal@gmail.com", phone : 0157555555  } ] ,(err , res)=>{
            if(err) throw err ;
            console.log(' one user inserted ') ;
            db.close();

        }  )

    })
    res.send('<h2> new user inserted </h2>');
})


// GETTING USERS FROM OUR DATABASE
app.get('/users',(req,res)=>{
    MongoClient.connect(url, (err,db) => {
        if (err) throw err ;
        let myDatabase = db.db('online-shop');
        myDatabase.collection('users').find({}).toArray((err , result)=>{
            if(err) throw err;
           res.send(result); 
           db.close();    


        })
    } )
});

// Delete all the users from online-shop
app.get('/delete-all-users',(req, res)=>{
 
MongoClient.connect(url , (err , db)=>{
    if (err) throw err ;
    let myDb = db.db('online-shop');
    myDb.collection('users').deleteMany({name : "Romal"} , (err , result)=>{
        if(err ) throw err ;
        console.log('deleting users....');
        res.send('<h3>'+ result.result.n + ' user are deleted</h3>');
        db.close()

    })

})

})

// connect with atlas Cloud Database
app.get('/cloud',(req , res ) => {

    const client = new MongoClient(cloudUrl, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("shopDB").collection("articles");
      
      collection.find({}).toArray((err , result)=>{
        if(err) throw err ;
        console.log(result);
        res.send(result);
        client.close();      
      });
          
    });
});

// add articles to the cloud Database 

app.get('/insert-cloud',(req , res ) => {

    const client = new MongoClient(cloudUrl, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("shopDB").collection("articles");
      
     
      collection.insertMany( [{ name : "Samsung Galaxy s 11" , price: 1200 },{ name : "Htc one " , price: 600 } ] ,(err , result)=>{
        if(err) throw err ;
        res.send('<h3> new 2 articles inserted </h3> ') ;
        client.close();

    });
          
    });
});
