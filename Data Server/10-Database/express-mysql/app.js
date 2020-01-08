const express = require('express');
const mysql = require('mysql');

const app = express();
app.listen('3000',()=> {
    console.log('Server started on port 3000');

});
app.get('/',(req,res)=>{
    res.send('<h2>Welcome  here is the hompage </h2>');

});
// connect 
const db = mysql.createConnection({
    host    :  'localhost',
    user    :  'admin',
    password : 'root',
    database:  'mysqlDB'
});
db.connect((err)=> {
    if(err){
        throw err;
    }
    console.log('Mysql connected');
    

})
// Create DB
app.get('/createdb' , (req,res)=>{
    let sql = 'create database mysqlDB';
    db.query(sql , (err , result )=> {
        if(err) throw err;
       console.log(result);        
        res.send('Database created....');
    })

})

// create table 
app.get('/createpoststable', (req,res)=>{
    let sql = 'CREATE TABLE posts  (id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255),PRIMARY KEY(id))'
    db.query(sql , (err , result)=>{
        if(err) throw err;
        console.log(result);
        res.send('posts table created...');     

    })

});

// insert post 1 
app.get('/addpost1',(req,res)=>{
    let sql = "insert into posts (id , title , body) VALUES (NULL,'new title ', 'tuseday post') ";
    db.query( sql ,(err , result) => {
        if(err) throw err
        console.log(result);
        res.send('Post 8 added');        

    })
})

// insert post 2
app.get('/addpost2' ,(req,res)=>{
    let post = { title : "the title two "  , body: "this is the body of the post 2 "  };
    let sql = 'insert into posts set ?';
    db.query(sql ,post ,(err , result)=>{
        if (err) throw err;
        console.log(result);
        res.send('<h3>post 2 added </h3>');
        
    })


});

// select posts 
app.get('/getposts' , (req,res)=>{
    let sql = 'select * from posts ';
    db.query(sql , (err , result)=> {
        if (err) throw err;
        console.log( result);
        res.send('Posts fetched')
        
    })
})

// select single post 
app.get('/getpost/:id' , (req,res)=>{
    let sql = `select * from posts where id = ${req.params.id} `;
    db.query(sql , (err , result)=> {
        if (err) throw err;
        console.log( result);
        res.send('Post fetched')
        
    })
});
// update post 
app.get('/updatepost/:id' ,(req,res)=> {
    let newTitle = 'how to learn hacking';
    let sql = `update posts set title = '${newTitle}' ,body='forget about it you are a developer'  where id = ${req.params.id}`;
    db.query(sql, (err , result)=>{
        if (err) throw err;
        console.log( result);
        res.send('Post updated....')

    })
})
// Delete Post
app.get('/deletepost/:id' ,(req,res)=> {
    let sql = `delete from posts where id = ${req.params.id} `;
    db.query(sql , (err , result)=>{
        if(err) throw err ;
        console.log(result);
        res.send('Post deleted....');    

        
    })
})