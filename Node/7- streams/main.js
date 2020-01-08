const fs = require('fs');
const file = fs.createWriteStream('file.txt');

file.write('hello world');
file.end(', from streams!');