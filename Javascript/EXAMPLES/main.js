document.getElementById("loan-form").addEventListener("submit",calculate);

function calculate(e){
    e.preventDefault();
    let amount = document.getElementById("amount"); // the amount input
    let interest= document.getElementById("interest");
    let years = document.getElementById("years");

    let monthlyPayment = document.getElementById("monthly-payment"); // the result
    let principal = parseFloat(amount.value);
    //alert(typeof principal);
    let calculatedInterest=parseFloat(interest.value)/100/12;
    //alert(typeof calculatedInterest);
    let calculatedPayments=parseFloat(years.value)*12;
    //alert(calculatedPayments);

    let x = Math.pow(1 + calculatedInterest,calculatedPayments);
    let monthly= (principal * x * calculatedInterest) / (x-1); 
    //alert(monthly.toFixed(2));
    
    // the totalPayment is the amount for the years
    let totalPayment = monthly.toFixed(2) * calculatedPayments
    console.log ( "the total amount to pay is :" +totalPayment);

    let totalInterest = totalPayment - principal;
     console.log("the total interest is : "+totalInterest);
    if(isFinite(monthly)){  // if mounthly is  a number
        monthlyPayment.innerText=monthly.toFixed(2);

    }
    else{
        monthlyPayment.innerText="please check your numbers";
    } 
     
    
    
    


}