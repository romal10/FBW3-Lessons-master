let zlib = require('zlib'); // the library from npmjs
let path = require('path')
let fs = require('fs');


const [ filepath = path.join(__dirname, "input.txt") ] = process.argv.slice(2)
// compress the file input.txt to input.txt.gz 
const stream = fs.createReadStream(filepath).pipe(zlib.createGzip())
                                            .pipe(fs.createWriteStream(filepath + ".gz"));


 stream.on("close" , () => console.log("file Compressed") );
                                            







