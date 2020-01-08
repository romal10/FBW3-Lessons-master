const path = require('path');

// base file name 
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File Extention 
console.log(path.extname(__filename));

// path object 
console.log(path.parse(__filename));