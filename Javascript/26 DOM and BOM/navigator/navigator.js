





let str = "";

str += "<div>Browser CodeName: " + navigator.appCodeName + "</div>";
str += "<div>Browser Name: " + navigator.appName + "</div>";
str += "<div>Browser Version: " + navigator.appVersion + "</div>";
str += "<div>Cookies Enabled: " + navigator.cookieEnabled + "</div>";
str += "<div>Browser Language: " + navigator.language + "</div>";
str += "<div>Connection Status: " + navigator.product + "</div>";

str += "<div>Platform: " + navigator.platform + "</div>";
str += "<div>User-agent header: " + navigator.userAgent + "</div>";

document.getElementById("brwoserInfo").innerHTML = str;



// check if we are online or offline
function checkInternet() {
    if(navigator.onLine) {
        alert("you are online :)");
    } else {
        alert("you are offline :( ");
    }
}