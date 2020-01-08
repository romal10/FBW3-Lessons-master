// we printing the numbers between 0 and 20 using while loop.
let i =0;
while(i <= 20 ){

    //console.log(i);
    i=i+1;
    //i++
}

// break the loop on 5 
i=0;
while(i <= 20 ){

    if(i==10){
        break;
    }
    console.log(i);
    i++;
}

/////////////////////////////

// we print the numbers betwwen 0 and 100 multi 9 
let c=0;
while(c <= 100){
    
    
    if(c*9 > 306) { 
        break;
    }

    console.log( c +" * 9 =" +  c * 9);
    
    
    c++;
}

////////////////////////////
// printing the numbers between 0 and 30 and escape the number 10 

let j=0 ; 
while (j <= 30){
    j++;
    if(j==10){
        continue;
    }
    console.log(j);
    
}
/////////////////////////////////////
let drinkList=["water","tea","coffee","milk","cola","beer","milk","englishTea"];
let counter=-1;

while(counter < drinkList.length-1){

    counter ++;  
    if(drinkList[counter]=="milk"){
       
        continue;
    }
    console.log(drinkList[counter]);
    

}
function delDrink(drink){
  let i= -1;
  while(i < drinkList.length-1 ){
      i++;
      if(drinkList[i]==drink){
          continue;
      }
      document.write(drinkList[i]+ "<br>");
  }

}
delDrink("coffee");

function addDrink(drinkName){
   

    if(typeof(drinkName) !=="undefined"){

        drinkList.push(drinkName);
        console.log("the drinkList after insert is : ");  
        console.log( drinkList);

    }
    
   
    

}
