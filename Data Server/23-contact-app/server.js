const  express=require("express");
const app= express();
const colors=require("colors");
const dotenv=require("dotenv");
const connectDB=require("./config/db");



// load ENV variables
dotenv.config({path:'./config/config.env'})
connectDB();


// Initialize the Middleware
app.use(express.json({extended:false}));



app.get('/',(req,res)=>{
    res.json({msg:'Welcome to contacts app api serom server.js...'})
})


//Define Routes
app.use('/api/users',require('./routes/users'));
app.use('/api/contacts',require('./routes/contacts'));
app.use('/api/auth',require('./routes/auth'));






const PORT=process.env.PORT || 5005;
app.listen(PORT, ()=>console.log(`Server is started on ==>  ${PORT}`.blue.underline.bold) )