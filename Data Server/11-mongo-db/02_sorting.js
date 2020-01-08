const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/"

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let mydb = db.db("mydb");
    let mysort = {name: 1}; 
    // { name: 1} // ascending -> a, b, c
    // {name: -1} // descending -> c, b, a
    mydb.collection("customers").find().sort(mysort).toArray(function(err, result) {
        if (err) throw err;
        console.log("Sorting the list...");
        console.log(result);
        db.close();
    });
});