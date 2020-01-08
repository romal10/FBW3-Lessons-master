document.querySelector(".get-jokes").addEventListener("click", getJokes);
document.querySelector(".jquery-jokes").addEventListener("click", jqueryJokes);
document.querySelector(".fetch-jokes").addEventListener("click", fetchJokes);



function getJokes(e) {

    e.preventDefault();

    let number = document.querySelector("#number").value;
    if (number === '') {
        alert(" you should add a number");
    }
    else {
        console.log(number);
        let xhr = new XMLHttpRequest();
        let url = `http://api.icndb.com/jokes/random/${number}`
        xhr.open('GET', url, true);
        xhr.onload = function () {
            if (this.status === 200) {
                //alert(this.status);
                let response = JSON.parse(this.responseText);
                console.log(response);
                let output = '';
                if (response.type === "success") {
                    response.value.forEach(function (item) {
                        output += `<li>${item.joke}</li>`;

                    })
                    document.querySelector(".jokes").innerHTML = output;

                }

            }

        }
        xhr.send();

    }


}


function jqueryJokes(e) {

    e.preventDefault();
    let number = $("#number").val();

    let url = `http://api.icndb.com/jokes/random/${number}`;

    $.get(url, function (data, status) {
        let output = '';
        if (status === "success") {
            data.value.forEach(function (item) {
                output += `<li>${item.joke}</li>`;

            })
            $(".jokes").html(output);

        }

    })

}

function fetchJokes() {

}