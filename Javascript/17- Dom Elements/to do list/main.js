let text = document.getElementById("toDo");
let button = document.getElementById("add");
let tasks = document.getElementById("tasks");

function addToDo() {
    if (text.value !== "") {
        let element = document.createElement("h4");
        element.innerHTML = text.value;
        document.getElementById("tasks").appendChild(element);
        text.value = "";
        text.focus();
        let el = document.getElementsByTagName("h4");

        for (let i = 0; i < el.length; i++) {
            el[i].onclick=function () {
                //tasks.removeChild(this);
                this.remove();



            }
        }

    }
    else {
        console.log("add to do list");
    }


}
function pressEnter(myEvent) {

    if (myEvent.keyCode == 13) {
        addToDo();
    }

}
button.addEventListener("click", addToDo);
text.addEventListener("keypress", pressEnter);
