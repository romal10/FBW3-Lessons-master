const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost:27017/shop', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
 

app.get('/', (req, res)=>{
    res.send('hi')
})
app.use('/databases', require('./routes/databases'))


app.listen(3001)