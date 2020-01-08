let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");




// Get Local Text file data
let  getText= () =>{
    fetch('test.txt')
    .then( res =>  {
        return  res.text();
        
    })
    .then(info => {
        console.log(info);
        document.getElementById("output").innerHTML = info;
    })
    .catch( err => {
        console.log(err);
        
    })
   
}

// Get Local Json file data
let  getJson = () => {
    fetch('posts.json')
    .then( res => {
        return  res.json();        
    })
    .then(data => {
        console.log(data);
       let output='';
        data.forEach(post => {
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
            output += `<li>  ${user.login} : <a href=" ${user.html_url} " > link </a> </li>  `;

        })

        document.getElementById("output").innerHTML = output;
    })
    .catch(function (err) {
        console.log(err);
        
    })
   
}


btn1.addEventListener("click",getText);
btn2.addEventListener("click",getJson);
btn3.addEventListener("click",getExternal);