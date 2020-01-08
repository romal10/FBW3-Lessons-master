const fs = require('fs');
const path = require('path');


let [searchWord="localhost" , filepath ="data.txt"] = process.argv.slice(2);



// let searchWord = process.argv[2];
// let filepath =  process.argv[3];
//console.log(searchWord);

if(!fs.existsSync(filepath)){
     filepath = "data.txt"
}
let readable = fs.createReadStream(__dirname +'/'+filepath,{encoding:'utf8'});

let i = 0 // chunk counter
let w = 0  //searchWord counter
readable.on('data',function(chunk){
    i++;
    console.log('reading ...'+i);
    if(chunk.includes(searchWord)){
        w ++ ;
    }  

})
readable.on('end',function(){
    
    process.stdout.write('End of the Data \n');
    process.stdout.write(`Number of chunk ${i} \n`);    
    console.log(`we found   ${searchWord}  ${w}  time `);
})
 
 