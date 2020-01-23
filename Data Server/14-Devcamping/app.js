
const express = require('express');
const dotenv = require('dotenv');
// Load env variables
dotenv.config({ path : './config/config.env'});
const app = express();
// Route files
const bootcamps = require('./routes/bootcamps');
// Mount routers
app.use('/api/v1/bootcamps',bootcamps);

app.get('/',(req,res)=>{
    res.status(200).json({ success: true , data : { name : "FBW3 "} });
})

const PORT = process.env.PORT || 5000;


app.listen(PORT,console.log(`Server Started on port ${PORT} in ${process.env.NODE_ENV} mode `))