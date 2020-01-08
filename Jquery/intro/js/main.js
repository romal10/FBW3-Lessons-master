
// $("h1") is the same of document.querySelectorAll("h1");

// we change all li colors to green in vanilla js 
let lis = document.querySelectorAll("li");
for (let i = 0; i < lis.length; i++) {
    lis[i].style.color = "green";
}

// i will change all li color to red using jquery
$("li").css("color", "red");

$("li").css({
    "border": "2px solid #ccc",
    "background": "orange",
    "fontSize": "2em",
    "color": "#fff"
});
console.log($("li").css("backgroundColor")); //rgb(255, 165, 0)
console.log(document.querySelector("li").style.backgroundColor); //orange

// Select all divs and give them a purple background
$("div").css("background", "purple");

// Select the divs with class "highlight" and make them 200px wide
$("div.highlight").css("width", "200px");

// Select the div with id "third" and give it a orange border
$("#third").css("border", "2px solid orange");

// Select the first div only and change its font color to pink
//$("div:first").css("color", "pink");
$("div:eq(0)").css("background", "pink");


// Select the first div with class highlight and change its font color to orange
$("div:first").css("color", "orange");


// change the text of the h1 from 'jquery is nice' to 'jquery is awsome'
 document.querySelectorAll("h1")[1].textContent ="jquery is awsome";
 // in jquery
 $("h1:eq(1)").text(" jquery is very awsome");
// we add input 
$("h1:eq(1)").html(" <input type='text' >  jquery is very awsome");
document.querySelector("input").value="jquery is awsome";
 // in jquery
 $("input").val("jquery is nice");
//  console.log($("input").attr("type"));
//  $("input").attr("type","checkbox");
//  console.log($("input").attr("type"));

$("img").attr("src","https://picsum.photos/id/392/800/400");
$("img").css("width","200px");
$("img:eq(1)").attr("src","https://picsum.photos/id/391/800/400");

$("img:eq(0)").attr("title","Brdige photo");
 


 