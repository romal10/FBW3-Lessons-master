const fs = require('fs');

var fileExistPath = './index.html';
var missingFilePath = './404.html'

// how to read file
/*
fs.readFile(fileExistPath, 'utf8', (err, data) => {
    if (err) throw err;
    // console.log(data);
    console.log('First: the data has been read');
});
console.log('Second: after the reading');*/

// sync

var data = fs.readFileSync(fileExistPath, 'utf8');
//console.log(data);
console.log("First: the data has been read");
console.log('Second: after the reading');


/*
fs.readFile(missingFilePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
*/
