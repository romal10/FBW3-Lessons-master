const axios = require('axios');

// axios({
//     url: 'https://newsapi.org/v2/everything',
//     method: 'get',
//     params: {
//         apikey:'1c39cf37111644e08d725bbdf60948bd',
//         q:'bitcoin'
//     }
// })
// .then( response => console.log(response.data)  )
// .catch(error => console.log(error));

const NewsApi = require('newsapi');
const newsapi = new NewsApi('1c39cf37111644e08d725bbdf60948bd');

newsapi.v2.topHeadlines({
    
    q:'technology',
      
})
.then( response => console.log(response))
.catch( error => console.log(error));
