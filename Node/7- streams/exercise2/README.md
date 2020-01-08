## Instructions for students:

### Compress File

Create a program to Compress Files. The program should compress a any file into a gzip archive and notify the user of success.

-   Make sure to create `index.js`, and to create your program you should use `createReadStream`, `pipe` and the [`zlib`](https://www.npmjs.com/package/zlib) library.

-   In this repository you will find a file `input.txt` that would have to be compressed by your program into `input.txt.gz` by default (if not file path has been provided).

```bash
$ node index
File Compressed.
```

-   After you have executed `index.js` you should be able to see on your program folder the new compressed file `input.txt.gz`.

-   The program should also be able to compress files from other folders if you pass a path as an argument. For example:

```bash
$ node index ../Node-FindWord/data.txt
File Compressed.
```
-   After you have executed the program that way you should be able to see in the `Node-FindWord` folder the new compressed file `data.txt.gz`.

### Rules

-   This is an individual assignment.
-   Deadline: 2 hours.
-   Use **Git properly**
