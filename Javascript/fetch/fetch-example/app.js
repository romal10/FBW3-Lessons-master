let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

btn1.addEventListener("click",getText);
btn2.addEventListener("click",getJson);
btn3.addEventListener("click",getExternal);


// Get Local Text file data 
function getText(){
    fetch('test.txt')
    .then(function (res) {
        return  res.text();
        
    })
    .then(function(info){
        console.log(info);
        document.getElementById("output").innerHTML = info;
    })
    .catch(function (err) {
        console.log(err);
        
    })
   
}

// Get Local Json file data
function getJson(){
    fetch('posts.json')
    .then(function (res) {
        return  res.json();
        
    })
    .then(function(data){
        console.log(data);
       let output='';
        data.forEach(function(post){
            output += `<li> ${post.title} : ${post.body}  </li>  `;

        })

        document.getElementById("output").innerHTML = output;
    })
    .catch(function (err) {
        console.log(err);
        
    })
   
}


// Get from External Api 
function getExternal(){
    fetch('https://api.github.com/users')
    .then(function (res) {
        return  res.json();
        
    })
    .then(function(data){
        console.log(data);
       let output='';
        data.forEach(function(user){
            output += `<li> ${user.login} : ${user.html_url}  </li>  `;

        })

        document.getElementById("output").innerHTML = output;
    })
    .catch(function (err) {
        console.log(err);
        
    })
   
}


