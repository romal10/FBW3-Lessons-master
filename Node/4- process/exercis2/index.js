let operation = process.argv[2]
let numbers = process.argv.slice(3)
let sum =0;

function sumNumbers(myArr){
    for (let i = 0 ; i< myArr.length ; i++){
     
        sum += parseInt(myArr[i])
    }
    console.log(sum);
}

function avg(myArr){

   return  sumNumbers(myArr)  / myArr.length;

}

switch(operation){   
    case "sum" :
        sumNumbers(numbers);
        break;

    case "avg" : 
        console.log(avg(numbers));
        break; 


}
    


//console.log(numbers);
