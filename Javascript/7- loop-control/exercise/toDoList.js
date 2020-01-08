// we create to do list array 
let toDoList=["Learn Javascript"];
// the first quistion
let userAnswer= prompt("what would you like to do?");
while(userAnswer !=="quit"){
    if(userAnswer=="list"){
        printlist();       
    }
    else if(userAnswer=="new"){
        addnew();
    }
    else if(userAnswer=="delete"){
        deltodo();
    }
    userAnswer= prompt("what would you like to do?");

}
console.log("Okay you close the app!!!");


function printlist(){
    toDoList.forEach( function(item){      
    console.log(item);
    console.log('*****************');
    } );
}
function addnew(){
        let newToDo=prompt(" add new task");
        toDoList.push(newToDo);
        console.log(newToDo + " added to the list!!");
}
function deltodo(){
    let delIndex= prompt("which task do you want to delete?");
    let toDelete = toDoList[delIndex]; // to save the element before deleting 
    toDoList.splice(delIndex,1); // index is the start index to delete 
    console.log( "the task  "+ toDelete+ " is deleted");
}