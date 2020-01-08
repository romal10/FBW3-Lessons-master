// printing the numbers between 1 and 20 multi 9 
let i=0;
while( i <= 20){
 
 console.log( i  + " * 9 =" +  i * 9 );
 i++;
}

////////////////////////////////////
let j = 20;
while (j >= 0){
 
    console.log( j  + " * 9 =" +  j * 9 );
    j--; 
}

////////////////////////////////77

let sum=0,counter=0;
 
while(counter <= 10){
    sum = sum + counter;
    //alert("Counter = "+counter+ " sum = "+ sum);
    counter++;  
}

// let c=prompt("please enter a variable value between 1 and 10" );
// alert(c);

// do while loop 

let t=0; 
let Sum=0;
do{

    Sum=Sum+t;
    console.log("Sum = "+ Sum);
    t++;
 
}
while(t < 10);

////////////////////////////////////////7
//printing square of stars using while loop 

i=1;    
while(i  <=  5 ){
    c=1;
    while(c <=5 ){

        document.write('* &nbsp;');
        c++;

    }
  document.write(' <br>');
  i++;

}
