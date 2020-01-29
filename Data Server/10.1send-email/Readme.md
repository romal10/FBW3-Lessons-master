## What is Express?
"Express is a fast, unopinionated minimalist web framework for Node.js" - official web site: [Expressjs.com](https://expressjs.com/)
iew --gi
Express.js is a web application framework for Node.js. It provides various features that make web application development fast and easy which otherwise takes more time using only Node.js.

Express.js is based on the Node.js middleware module called **_connect_** which in turn uses **http** module. So, any middleware which is based on connect will also work with Express.js.
![enter image description here](https://buttercms.com/static/images/tech_banners/ExpressJS.8587dd0647ca.png)



###  Advantages of Express.js

 1. Makes Node.js web application development fast and easy.
 2. Easy to configure and customize.
 3. Allows you to define routes of your application based on HTTP methods and URLs.
 4. Includes various middleware modules which you can use to perform additional tasks on request and response.
 5. Easy to integrate with different template engines like Jade, Vash, EJS etc.
 6. Allows you to define an error handling middleware.
 7. Easy to serve static files and resources of your application.
 8. Allows you to create REST API server.
 9. Easy to connect with databases such as MongoDB, Redis, MySQL

### Install Express.js
You can install express.js using npm. The following command will install latest version of express.js globally on your machine so that every Node.js application on your machine can use it.

    npm install -g express
The following command will install latest version of express.js local to your project folder.

    npm install express --save
As you know, --save will update the package.json file by specifying express.js dependency.
