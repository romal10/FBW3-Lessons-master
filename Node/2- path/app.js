const pathFunctions = require('./pathFunctions');
const path = require('path');

console.log('app: Live Server');

pathFunctions.getConstants();

pathFunctions.getBaseName(__filename);
pathFunctions.getBaseName('/home/user/index.js'); // index.js

pathFunctions.getDirName(__filename);
pathFunctions.getDirName('/home/user/index.js'); // /home/user

pathFunctions.getExtName(__filename); // .js
pathFunctions.getExtName('/home/user/user.png'); //.png
pathFunctions.getExtName('/home/user/Readme.md'); //.md
pathFunctions.getExtName('/home/user/style.css'); //.css

let res;
res = path.join('/home', 'user_folder', 'style.css');
console.log('join: ' + res);
res = path.join('/book_store', 'kite_runner', 'book.pdf');
console.log('join: ' + res);
res = path.join('/book_store', 'how_to_learn_js_in_35555555555.5h', 'book.pdf');
console.log('join: ' + res);
res = path.join('/book_store', 'kafka_on_the_beach', 'book.pdf');
console.log('join: ' + res);

// parse
console.log('\nparse function');
res = path.parse('/book_store/kafka_on_the_beach/book.pdf');
console.log(res);
console.log(typeof res);
console.log('dir: ' + res.dir);
console.log('base: ' + res.base);
console.log('ext: ' + res.ext);
console.log('name: ' + res.name);

//format
console.log('\nformat function');
res = path.format({
    dir: '/store/learn_node_js_in_24h',
    base: 'book_name.pdf',
});
console.log('format: ' + res);
res = path.format({
    root: '/',
    dir: '/website/store/',
    name: 'book_name',
    ext: '.pdf'
});
console.log('format: ' + res);
res = path.format({
    dir: '/website/store/',
    base: 'book_name.pdf'
});
console.log('format: ' + res);

