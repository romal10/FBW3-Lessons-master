# MongoDB

MongoDB is most popular NoSQL database. It's used together with Node.js.

## How to install MongoDB on Ubuntu

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

```bash
# Install gnupg
sudo apt-get install gnupg

# Import the public key used by the package management system.
wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add - 

# Check your Ubuntu Version
# Do you have 16.04 Xenian or 18.04 Bionic ?
uname -a

# For Xenian
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list

# For Bionic
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list

# Update Ubuntu Packages
sudo apt-get update

# Install the MongoDB packages.
sudo apt-get install -y mongodb-org
``` 

## How to Start MongoDB

```bash
# Start MongoDB
sudo service mongod start

# Verify that MongoDB has started successfully
sudo service mongod status

# Stop MongoDB
sudo service mongod stop

# Restart MongoDB
sudo service mongod restart
```

## Install Mongo Driver for Node.js

```
npm install mongodb
```

## Get Started

Now you can import the mongodb package into your Node.js application.  
```javascript
const mongo = require('mongodb');
```

How to run
```bash
node file_with_mongo.js
```

## Creating Database

Create a client and connect to database. The default port for MongoDB is 27017. 
```javascript
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

MongoClient.connect('mongodb://localhost:27017/mydb', function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
```

## Creating Collection

Collection in MongoDB is the same as table in MySQL.

To create a collection in MongoDB, use the `createCollection()` method:

```javascript
const url = "mongodb://localhost:27017/"

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var mydb = db.db("mydb");
    mydb.createCollection("customers", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });
```

## Insert into Collection
To insert a record, or document as it is called in MongoDB, into a collection, use the `insertOne()` method.

```javascript
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var mydb = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  mydb.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
```

## Find a Document
In MongoDB `find` (find all) and `findOne` (find first) methods are used to find data in a collection.

### Method findOne

Returns the first occurrence in the collection.

```javascript
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var mydb = db.db("mydb");
    mydb.collection("customers").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result.name);
      console.log(result.address);
      db.close();
    });
  });
```

### Method find

Returns all occurrences in the selection

```javascript
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var mydb = db.db("mydb");
  mydb.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

```

## Query

Find a specific info using `find(query)` 

```javascript
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var mydb = db.db("mydb");
  var query = { name: "DCI" };
  mydb.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
```

## Sort

Use sort function to sort by filed name

```javascript
{ name: 1 } // ascending
{ name: -1 } // descending
```

```javascript
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var mydb = db.db("mydb");
  var mysort = { name: -1 };
  mydb.collection("customers").find().sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
```

## Delete

Use `deleteOne` and `deleteMany` to delete documents.

### Delete One

```javascript
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var mydb = db.db("mydb");
  var myquery = { name: 'DCI' };
  mydb.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});
```

### Delete Many

```javascript
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var mydb = db.db("mydb");
  var myquery = { name: 'DCI' };
  mydb.collection("customers").deleteMany(myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
});
```

## Drop Collection

Use `drop` to remove your collection

```javascript
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var mydb = db.db("mydb");
  mydb.collection("customers").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
});
```


