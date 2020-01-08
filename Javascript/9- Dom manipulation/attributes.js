let link = document.querySelector("a"); // we get the first link 

console.log(link.getAttribute("href")); // www.google.com

// we change the href to www.ping.com
link.setAttribute("href","http://www.ping.com");

console.log(link.getAttribute("href")); // www.ping.com
