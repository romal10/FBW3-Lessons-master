function greeting()
{
    console.log("Hello world");

}
// call the function 
greeting();


function sayHi(message){

    console.log(message);

}

sayHi("Hello how are you ");

let m = "guten morgen";

sayHi(m);

/////////////////////

function getMax(num1,num2){
    console.log("the value of the  first pararmeter is : " + arguments[0]);
    console.log(" the count of the parameters is : "+ arguments.length);
    if(num1 > num2){
        console.log(num1);
    }
    else {
        console.log(num2);
    }
}
getMax(1,9); // 9 

function getMax1(){

    if(arguments[0] > arguments[1]){
        console.log(arguments[0]);
    }
    else {
        console.log(arguments[1]);
    }
}
getMax1(1,9);  // 9 

function getMax3(){

    let max = 0;
    for(let i = 0 ; i < arguments.length ; i++ ){
        if(arguments[i] > max ){
            max=arguments[i];
        }
        console.log("i = "+i +  " argument[i]=  "+arguments[i] +" max = " + max);
    }
    console.log("the max number is  "+ max);
}
getMax3(3,6,9,10,66); // 66

function getMax4(){

    let max = 0;
    for(let i = 0 ; i < arguments.length ; i++ ){
        if(arguments[i] > max ){
            max=arguments[i];
        }
       // console.log("i = "+i +  " argument[i]=  "+arguments[i] +" max = " + max);
    }
    //console.log("the max number is  "+ max);
   
    return max;
}
document.getElementById("maxNumber").innerHTML = getMax4(1,5,88,999,10,500);


function getMax5(){

    let max = 0;
    for(let i = 0 ; i < arguments.length ; i++ ){
        if(arguments[i] > max ){
            max=arguments[i];
        }
      //  console.log("i = "+i +  " argument[i]=  "+arguments[i] +" max = " + max);
    }
    //console.log("the max number is  "+ max);
   
    document.getElementById("maxNumber").innerHTML= max;
}
getMax5(1,5,88,110000099,10,500);


