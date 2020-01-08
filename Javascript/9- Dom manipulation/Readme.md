###The DOM
###Document Object Model
**The , Object Model is the interface between your Javascript and HTML+CSS**

##The browser turns every HTML tag into a Javascript object that we can manipulate
##Everything is stored inside of the document object

<!DOCTYPE html>
<html>
<head>
	<title>My title</title>
</head>
<body>
	<a href="someLink">My link</a>
	<h1>My header</h1>
</body>
</html>

##The Process
##SELECT an element and then MANIPULATE

##SELECT the <h1> and save to a variable

##let h1 = document.querySelector("h1");

##h1.style.color = "pink";

##One more example

SELECT the <body> and change its color every second

let body = document.querySelector("body"); //SELECT
let isBlue = false;

setInterval(function(){   //MANIPULATE
 if (isBlue) {
   body.style.background = "white";
 } else {
   body.style.background = "#3498db";
 }
 isBlue = !isBlue;
}, 1000);







