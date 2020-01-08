
let pass = document.querySelector(".password");

    function checkLength(input){
        if(input.value.length >= 8){
            document.querySelector(".length").style.color="green";
            document.querySelector(".length").style.fontWeight="bold";
        }
        else {
            document.querySelector(".length").style.color="red";
            document.querySelector(".length").style.fontWeight="100";

        }

    }
    
function checkUppercase(){

}

pass.addEventListener("keyup",function(){

   checkLength(pass);
    


});

