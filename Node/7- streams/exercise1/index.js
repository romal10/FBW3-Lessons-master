console.log("Open big file chunk by chunk and count a word");
console.log(" ");
const fs = require("fs");
const path = require("path");

const [
    word = "localhost",
    filePath = path.join(__dirname, "data.txt")
] = process.argv.slice(2);

var myReadStream = fs.createReadStream(filePath, "utf8");

let i = 0;
let n = 0;

myReadStream.on("data", function(chunk) {
    n++;
    if (chunk.includes(word)) i++;
    console.log(`Reading chunk ${n}`);
});
myReadStream.on("end", () => {
    console.log("End of data");
    console.log("Number of chunks:", n);
    console.log(`Found '${word}' ${i} times`);
});
