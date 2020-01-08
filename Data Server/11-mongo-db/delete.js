const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/"

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let mydb = db.db("mydb");
    let myquery = {name: "google"};
    mydb.collection("customers").deleteOne(myquery, function(err, obj) {
        if (err) throw err;
        console.log("deleting the first occurrence with the name google");
        db.close();
    });
});
// get list of all documents
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let mydb = db.db("mydb");
    mydb.collection("customers").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log("get list of all documents");
        console.log(result);
        db.close();
    });
});