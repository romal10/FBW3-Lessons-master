let input = document.getElementById("text");
let button = document.getElementById("add");
let tasks = document.getElementById("tasks");
function addtodo() {

    if (input.value !== "") {

        let element = document.createElement("h4");

        element.innerHTML = input.value;

        document.getElementById("tasks").appendChild(element);

        input.value = "";
        input.focus();
        let el = document.getElementsByTagName("h4");

        for (i = 0; i < el.length; i++) {
            el[i].onclick = function () {

                tasks.removeChild(this);

            }
        }
    }
    else {
        console.log("please add to do then click add");
    }

}
button.addEventListener("click", addtodo);
input.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        if (input.value !== "") {
            addtodo();
        }
        else {

            console.log("please add to do then click add");

        }
    }
});



