let rabbit = {};
rabbit.speak=function(speak) {
    console.log(speak);
}
rabbit.speak("I am alive");
/////////////////////////////
function speak(text){
    console.log( `the  ${this.type} rabbit says  ${text} `);
}
let whiteRabbit = {  type :"white" ,speak};
let hungryRabbit ={type : "hungry" ,speak};

whiteRabbit.speak(" hello");
hungryRabbit.speak(" i need a carrot");

speak.call(hungryRabbit ,"Hello");
//////////////////////////////////////////////////////

let grayRabbit = Object.create(rabbit);
grayRabbit.type="gray";
grayRabbit.speak("hi");

 ////////////////////////////////
 let myobj = {};
 myobj.alert = function (text) { 
    document.write(text);
   }
   ////////////////////////////////////////////
//    function test(){
//    }
   let test = (function () {   
       alert("hello FBW3");
    })();


   

