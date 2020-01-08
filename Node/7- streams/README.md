# What are Streams?


Streams are objects that let you read data from a source or write data to a destination in continuous fashion. In Node.js, there are four types of streams −

 

## how to use Streams?

* Readable − Stream which is used for read operation.
* Writable − Stream which is used for write operation.
* Duplex − Stream which can be used for both read and write operation.
* Transform − A type of duplex stream where the output is computed based on input.

#### For example, let's assume that you have to read a large file. If the file size is larger than your free memory space, you cannot read the whole file into the memory in order to process it. You have to read it piece by piece and process each chunk, which may be separated by a line for example. Another example of a continuous source is network communication - like a chat application where data should be continuously flowing from the sender to the receiver.

### Writable Streams


``` javascript
const fs = require('fs');
const file = fs.createWriteStream('file.txt');

file.write('hello world');
file.end(', from streams!');

```
#### In this code, we have used the file system module to create a writable stream to a file (file.txt) and write 2 separate chunks to it: hello world and , from streams.

#### Unlike the fs.writeFile() where we need to write the file content at once, using a stream we can write the content chunk by chunk.
#### To simulate a continuous input, we could do something along the lines of:


``` javascript
const fs = require('fs');
const file = fs.createWriteStream('file.txt');

for (let i = 0; i < 10000; i++) {
    file.write('Hello world ' + i);
}
file.end();
```


### Readable Streams