let food = new Array("Pizza","Kebab","Döner","Falafel","Kartofel Salat","Briani");

 let foodLength=food.length;  
for(let counter=0 ; counter < foodLength ; counter ++ )
{
    document.write(food[counter]+ '<br>');
}

////////////////////////////////////////

let colors= new Array ("red","blue","green","yellow","black"); 
colors.push('#cc00ee');
// let colors= ["red","blue","green","yellow","black"]
document.write('<hr>');
for(i=0 ; i < colors.length ; i++){
    document.write(colors[i]+ '<br>');
}

document.write('<hr>'); let div;
for(i=0 ; i < colors.length ; i++)
{
    div="<div style='text-align:center;margin:0 auto;height:40px;color:white;width:"+i+5+"%;background:"+colors[i]+"'>" + colors[i]+ "</div>";
    document.write(div);
}

////////////////////////////////////////////////////////////////77
let student=[80,70,90,60,77,59];



// for loop with array in js

let veggieFood =["Apple","orange","kiwi","beans","potato","Banana"];
veggieFood.push("chicken","tomato");
for(let i=0; i< veggieFood.length; i++){
  
    if(veggieFood[i]=="chicken"){
     
     //alert(" oh nooo your food list is not veggie anymore");
    break;
    
    }
    //console.log(veggieFood[i]);
    }
/////////////////////////////////////////////////////////////////////////////////////
// we delete the none Veggie item

for(let i=0;i< veggieFood.length ; i++){

    if(veggieFood[i]=="chicken"){
        alert(" you have chicken and your list is not veggie");
        veggieFood[i]="Lemon";
        alert("we changed the chicken to Lemon thank you !!");
    }
    
    console.log(veggieFood[i]);
}


