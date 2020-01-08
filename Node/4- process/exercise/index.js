const print = require('./stars');
let myArr = process.argv.slice(2);
console.log(myArr);
let stars = myArr[0];
let header = myArr[1];
print(stars,header)