const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/"

// create a new collection "customers" in the database "mydb"
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let mydb = db.db("mongoDB");
    mydb.createCollection("customers", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});

// insert "google" and "facebook" into collection "customers"
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let mydb = db.db("mongoDB");
    let myobj = {name: "google", address: "Silicon Valley"};
    mydb.collection("customers").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1st document inserted");
        db.close();
    }); 

    let myobj2 = {name: "facebook", address: "New York"};
    mydb.collection("customers").insertOne(myobj2, function(err, res) {
        if (err) throw err;
        console.log("2nd document inserted");
        db.close();
    }); 

    let myobj3 = {name: "zalando", address: "Hamburg"};
    mydb.collection("customers").insertOne(myobj3, function(err, res) {
        if (err) throw err;
        console.log("3rd document inserted");
        db.close();
    });
});