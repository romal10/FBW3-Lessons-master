# Express JS - Middleware
Middleware functions are functions that have access to the **request object (req)**, the **response object (res)**, and the **next** middleware function in the application’s request-response cycle. These functions are used to modify **req** and **res** objects for tasks like parsing request bodies, adding response headers, etc.

![middleware in express js](https://miro.medium.com/max/1001/1*wIkLR_9twvmG-LitHYoftw.png)
If the current middleware function does not end the request-response cycle, it must call `next()` to pass control to the next middleware function. Otherwise, the request will be left hanging.

 **What is this next()?**
A middleware is basically a function that will  receive the Request and Response objects, just like  route Handlers do. As a third argument you have another function which you should call once your middleware code completed. This means you can wait for asynchronous database or network operations to finish before proceeding to the next step. This might look like the following:

![enter image description here](https://miro.medium.com/max/1270/1*ptNjzuT0m2BQ9YpQTVwVLg.png) 
## Types of express middleware

Following is a list of possibly used middleware in Express.js app:
-   Application level middleware  **app.use**
-   Router level middleware  **router.use**
-   Built-in middleware  **express.static,express.json,express.urlencoded**
-   Error handling middleware  **app.use(err,req,res,next)**
-   Thirdparty middleware  **bodyparser,cookieparser**