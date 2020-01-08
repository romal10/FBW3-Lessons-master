fetch('http://localhost:5005/api/members')
  .then(response => response.json())
  .then(json => console.log(json))
