const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const flash = require("connect-flash");
const session = require("express-session");
const expressValidator = require("express-validator");
const expressLayouts = require("ejs");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");

// Load env variables
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();


const app = express();

// app use
//app.use(expressLayouts);

// View Engine 
app.set ('view engine ', 'ejs');


app.use(express.urlencoded({extended:true})) // Body parser for posting of data
const PORT = process.env.PORT || 5005;


// express session
app.use( session({

    secret: "secret",
    resave:true,
    saveUninitialized:true
}));

// passport Middelware
app.use(passport.initialize());
app.use(passport.session());

// connect with flash
app.use(flash());

// Global Verialbes

app.use((req,res,next)=>{
    res.locals.success_message = req.flash('success_msg');
    res.locals.error_message = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})

// Routes
const index = require('./routes/index')
const users = require ('./routes/users')

app.use('/', index);
app.use('/users', users)


const server = app.listen(PORT,
  console.log(`Server Started on port ${PORT} in ${process.env.NODE_ENV} mode `.bgMagenta)
);

