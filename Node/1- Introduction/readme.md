# Node JS

Node.js is a very powerful JavaScript-based platform built on Google Chrome's JavaScript V8 Engine. It is used to develop I/O intensive web applications like video streaming sites, single-page applications, and other web applications. Node.js is open source, completely free, runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.), and used by thousands of developers around the world.

Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.

## What Can Node.js Do?

* Node.js can generate dynamic page content
* Node.js can create, open, read, write, delete, and close files on the server
* Node.js can collect form data
* Node.js can add, delete, modify data in your database


### The First Node Js Application

``` javascript



function hello(fullname){

	console.log("Hi " + fullname + ". The time is : " + new Date().getHours() + " Hours and " + new Date().getMinutes() + " minutes !");

}

hello('Mansour Tumeh')


```
#### we create main.js with this code and in the Terminal we write just 
``` javascript
node main.js
```