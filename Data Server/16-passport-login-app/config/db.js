const mongoose = require('mongoose');

//https://cloud.mongodb.com/user#/atlas/login


//rTxmFUbmr6wBHMezconst mongoose = require('mongoose');
const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser : true,
        useCreateIndex : true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
    console.log(` MongoDB Connected : ${conn.connection.host} ` .cyan.underline.bold )
}
module.exports = connectDB;