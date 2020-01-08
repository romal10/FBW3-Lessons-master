const fs = require('fs');

// create a readable stream 

let read = fs.createReadStream('test.txt');

// create writeable stream 

let writeable = fs.createWriteStream('output.txt');
// pipe is the read and write operations
// read test.txt and write data to output.txt
read.pipe(writeable);

console.log('programm Ended');

