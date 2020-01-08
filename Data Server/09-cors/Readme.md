# Express JS - **Cross-Origin Resource Sharing** (Cors)

![enter image description here](https://miro.medium.com/max/1200/0*U8dnB6RsCZKPCyQM.jpg)
A JavaScript application running in the browser can usually only access HTTP resources from the same domain (origin) that serves them.

![cors error ](https://flaviocopes.com/express-cors/fetch-failed-cors.png)but XHR and Fetch calls to an external, 3rd party server will fail. That is unless the 3rd party server implements a mechanism which allows the connection to be made and requested resources to be downloaded and used.
This mechanism is called [CORS](https://expressjs.com/en/resources/middleware/cors.html), **Cross-Origin Resource Sharing**.
A Cross-Origin resource fails if it’s:

-   to a different **domain**
-   to a different **subdomain**
-   to a different **port**
-   to a different **protocol**
