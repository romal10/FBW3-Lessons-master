#  The request Object in Express.js!
![enter image description here](https://scotch-res.cloudinary.com/image/upload/w_1050,q_auto:good,f_auto/media/https://scotch.io/wp-content/uploads/2014/11/node-express-sendfile.png)
Express.js is the king of server frameworks because it provides a developer-friendly abstraction of the core `http` module in Node.js. It’s like using **jQuery** instead of `document.querySelectorAll` because it lets you, the developer, be way more productive!
The `req` object in Express.js allows you to examine every aspect about the request that the client made  like the URL,  JSON data, form data...

you can visit the [official documentation](https://expressjs.com/en/api.html#req)

### User-supplied Data
There are three primary ways for Express.js apps to receive user-supplied data: `req.params`, `req.query`, and `req.body`.

 

  ### `req.params`
 se(express.static(path.join(__dirname, 'public')));
se(express.static(path.join(__dirname, 'public')));

``` javascript
    
// GET https://localhost:3000/user/211

app.get('/:userid', (req, res) => {
  console.log(req.params.userid) // "211"
})
```

 ### `req.query`
 ``` javascript
// GET https://localhost:3000/search?keyword=learn-javascript

app.get('/search', (req, res) => {
  console.log(req.query.keyword) // "learn-javascript"
})
```
### `req.body`
Allows you to access the JSON data that was sent in the request. Generally used in POST/PUT requests to send  JSON data to the server:
 ``` javascript
// POST https://hamburg-coders.com/login
//
//      {
//        "email": "fbw3@gmail.com",
//        "password": "code1iSmyLife"
//      }

app.post('/login', (req, res) => {
  console.log(req.body.email) // "fbw3@gmail.com"
  console.log(req.body.password) // "code1iSmyLife"
})
```

 ## Examining the URL
 for example: 
``` javascript

// https://node.hamburg-coders.pro/weather?filter=very-cold

app.get('/weather', (req, res) => {
  console.log(req.protocol)     // "https"
  console.log(req.hostname)     // "hamburg-coders.pro"
  console.log(req.path)         // "/weather"
  console.log(req.originalUrl)  // "/weather?filter=very-cold"
  console.log(req.subomains)    // "['node']"
})
```

## Additional `req` Properties

 - ### `req.method`
 Access the HTTP method (GET, POST, PUT, DELETE) with `req.method`.
``` javascript 
app.delete('/', (req, res) => {
  console.log(req.method) // "DELETE"
})
```
 - ### `req.header()`
  Access the headers sent in the request:
``` javascript 
app.post('/login', (req, res) => {
  req.header('Content-Type')  // "application/json"
  req.header('user-agent')    // "Mozilla/5.0 (Macintosh Intel Mac OS X 10_8_5) AppleWebKi..."
  req.header('Authorization') // "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
})
```
The argument for `req.header` is case-insensitive so you can use `req.header('Content-Type')` and `req.header('content-type')` interchangeably.
 - ### `req.cookies`
 f you’re using [cookie-parser](https://github.com/expressjs/cookie-parser) to parse cookies it will store it in `req.cookies`
``` javascript
 
// Cookie sessionDate=2019-05-28T01:49:11.968Z

req.cookies.sessionDate // "2019-05-28T01:49:11.968Z"
```
These are the most popular ways that `req` is used in Express.js. If you’d like to view the official documentation on `req` please visit the [official Express.js docs](https://expressjs.com/en/api.html#req).
