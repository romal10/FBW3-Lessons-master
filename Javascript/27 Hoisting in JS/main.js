

// function Hoisting 
// the function can be used before define 
sayHello();

function sayHello(){
    //alert("Hello we are FBW3");    
}

// Variables Hoisting

//text = "Good Morning";
//alert(text);
//var text;

var a= 1;
alert(a + "," + b); // 1,undefined
var b=2;
///////////////////////////
var x = 7;
var y;
alert(x + "," + y); //7,undefined
///////////////////////////
var o=6;
    t= 44;
alert(o + "," + t);  // 6,44
var t;
/////////////////////
var z = 55;
alert(z + "," + u); //55,undefined
var u;
u = 9;

