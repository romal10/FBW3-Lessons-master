const path = require('path');
const fs = require('fs');

// create a folder 
// fs.mkdir(path.join(__dirname, '/farhan/') ,  (err)=> {
//     if(err) {
//         console.log(err)
//     }
//     else {
//         console.log(' Folder created....');
//     }
// });
const content = "Hello from the other side"
// create a file and write inside 
fs.writeFile( path.join(__dirname, '/test','hello.txt') ,'i love node js' , (err)=> {
    if(err) {
        console.log(err)
    }
    else {
        console.log(' file  created....');
    }

} )

// append to a file 
fs.appendFile( path.join(__dirname, '/test','hello.txt') ,' i love React js' , (err)=> {
    if(err) {
        console.log(err)
    }
    else {
        console.log(' file  created....');
    }

} )

// Read a file 
fs.readFile(path.join(__dirname, '/test', 'hello.txt') ,'utf8', (err,data) => {
    if (err){
        console.log(err)
    }
    else {
        console.log(data)
        
    }
})
