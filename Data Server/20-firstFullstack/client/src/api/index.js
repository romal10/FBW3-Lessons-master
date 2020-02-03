import axios from 'axios';

const api =axios.create({
    baseURL:'http:localhost:5000/api'
})

const getMoiveList = () => api.get('/list')
const sendMovie = (data) => api.post('/newReview',data)
const DeleteMovie = (data) => api.delete('/deleteMovie', data)

const apsi = {
    getMovieList,
    sendMovie, 
    deleteMovie
}

export default apis