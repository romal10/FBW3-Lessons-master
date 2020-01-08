let form = document.querySelector("#task-form");
let taskInput=document.querySelector("#task");
let taskList = document.querySelector("#task-list");


loadeventListner();
function loadeventListner(){
    // the submit event
    form.addEventListener("submit",addTask);

    // remove task event 
    taskList.addEventListener("click",removeTask);

    document.addEventListener("DOMContentLoaded",getTasks);

} 




function createH5 (text){
    let h5 = document.createElement("h5");
    let taskText = document.createTextNode(text);
    h5.appendChild(taskText);
    let delBtn = document.createElement("button");
    delBtn.innerText="X";
    delBtn.className="delete btn btn-danger ml-5";
    h5.appendChild(delBtn);
    taskList.appendChild(h5);

}

function addTask(e){
   e.preventDefault();
   if(taskInput.value !=""){ 
    createH5(taskInput.value);   
    storeToLocalStorage(taskInput.value);
    
}
    else { alert("please add a task");
    }
}

function removeTask(e){
    if(e.target.classList.contains("delete")){
        // remove from html
        e.target.parentElement.remove();
        //remove from localStorage
        removeFromLocalStorage(e.target.parentElement);
        
    }

}
function storeToLocalStorage(task){
    
    let tasks;
    if(localStorage.getItem("tasks")===null){
       
        alert("the local storage was empty");
        tasks=[];        
    }
    else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    console.log(tasks);
     tasks.push(task);
    // store the tasks in localstorage
     localStorage.setItem("tasks",JSON.stringify(tasks));
     taskInput.value="";
}
// add to localstorage without input
function store(){
    let mytask = localStorage.getItem("tasks");
    mytask = JSON.parse(mytask);
    mytask.push("leran something");
    mytask = JSON.stringify(mytask);
    localStorage.setItem("tasks",mytask);
}
function getTasks(){
    let tasks;
    if(localStorage.getItem("tasks")===null){
        tasks=[];
    }
    else{
       tasks = JSON.parse(localStorage.getItem("tasks"));
       //console.log(tasks);
       tasks.forEach( function(storedTask){ 
        //console.log(storedTask);
        createH5(storedTask);

       });

    }

}
function removeFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem("tasks")===null){
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach( function(task,index){
        if(taskItem.firstChild.textContent === task){
            tasks.splice(index,1);

        }
        

    });
    localStorage.setItem("tasks",JSON.stringify(tasks));

}




