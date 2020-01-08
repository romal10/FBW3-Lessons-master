let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let addPost = document.querySelector("#addPost");

btn1.addEventListener("click", getText);
btn2.addEventListener("click", getUsers);
btn3.addEventListener("click", getPosts);
btn4.addEventListener("click", allUsers);
addPost.addEventListener("submit", createPost);

function getText() {
    fetch("test.txt")
        .then(function (res) {
            return res.text();
        })
        .then(function (data) {
            //console.log(data);
            document.getElementById("output").innerText = data;

        })
        .catch(function (err) {
            console.log(err);
        })
}
function getUsers() {
    fetch("users.json")

        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            let output = "<h2 class='mb-4 text-danger'> Users </h2>";
            data.forEach(function (user) {
                output += `
              <ul class="list-group mb-4"> 
                <li class="list-group-item"> ${user.id}  </li>
                <li class="list-group-item"> ${user.name}  </li>
                <li class="list-group-item"> ${user.email}  </li>
              </ul>
              `;
            });
            document.getElementById("output").innerHTML = output;


        })

}

function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")

        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            let output = "<h2 class='text-danger mb-4'> Posts </h2>";
            data.forEach(function (post) {
                output += `
            <div class="card card-body mb-4 " >
               <h3 class ="text-info"> ${post.title} </h3>
               <p> ${post.body} </p>
            </div>
            `;
            });
            document.getElementById("output").innerHTML = output;


        })

}
// async await in js

async function getAllUsers() {

    //await response of fetch
    let response = await fetch("https://jsonplaceholder.typicode.com/users");

    //only proceed if the responce is resolved 
    let data = await response.json();

    //only proceed if data is resolved 
    return data;
}

function allUsers() {

    getAllUsers().then(function (users) {

        console.log(users);
        let output = "<h2 class='text-primary mt-4'> All users from API </h2>";
        users.forEach(function (user) {
            output += `
            <div class="card card-body mb-4 " >
               <h3 class=""> ${user.id} </h3>
               <p> Name : ${user.name} </p>
               <p> email : ${user.email} </p>
               <p> street : ${user.address.street} </p>
               <p> city : ${user.address.city} </p>
            </div>
            `;
        });
        document.getElementById("output").innerHTML = output;

    });
}

function createPost(e) {
    e.preventDefault();
    let title = document.querySelector("#title").value;
    let body = document.querySelector("#body").value;
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers: {
            'Accept': 'application/json , text/plain , */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ title: title, body: body, userId: 400 })

    })
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
        })



}