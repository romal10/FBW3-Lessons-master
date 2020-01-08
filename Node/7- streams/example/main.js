const fs = require('fs');

let readable = fs.createReadStream(__dirname + '/lorem.txt' ,{encoding : 'utf8', highWaterMark: 25 * 1024});
let writeable = fs.createWriteStream(__dirname + '/loremcopy.txt');

readable.on('data',function(piece){
    console.log(piece.length);
    writeable.write(piece);

})

