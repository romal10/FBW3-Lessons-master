const LocalStrategy  = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const JWtStrategy = require ('passport-jwt').Strategy;
const passport = require('passport')
const jwt = require ('jsonwebtoken')
const facebookStrategy = require ('passport-facebook').Strategy;
const nodemailer = require ('nodemailer');


//this is nodemailer module codes, we can get this code from nodemailer webpage
let transporter = nodemailer.createTransport({
    host: "smtp.googlemail.com",
    port: 465,
    secure: true,
    auth: {
      user:'ad.sulemann@gmail.com',
      pass: '',
       // if we send the contact from from the local host so we will be rejected, that's why we need to juse the tls .
    },
    tls:{
          rejectUnauthorized:false
    }
  });

// setup email data with unicode symbols
let mailOptions = {
    from: '"Stargid Customers " <support@stargid.com>', // sender address
    to: 'mohey.romal@gmail.com', // list of receivers
    subject: ' Welcome to our Website  ', // Subject line
    text: 'Welcome', // plain text body
    html: output // html body
};



// Load User Model
const User = require('../models/User');

module.exports = (passport)=>{
    passport.use(
        new LocalStrategy({usernameField :'email'} , (email , password ,done)=>{
            // Match User in mongo DB
            User.findOne({email : email})
            .then((userData)=>{
                if(!userData){
                    return done(null,false,{ message :'this email is not registered' })
                }
                // Match password
                bcrypt.compare(password ,userData.password ,(err , isMatch) => {
                    if(err) throw err;

                    if(isMatch){
                        sendRegisterEmail(userData.email)

                    }
                    else {
                        return done(null , false , {message :'Password incorrect' })
                    }


                })

            })
            .catch(err => {
                console.log(err);
                
            })


        })
        
    )
    passport.serializeUser((user, done)=> {
        done(null, user.id);
      });
      
    passport.deserializeUser((id, done)=> {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      });
      const optionsJWT = {
          jwtFromRequest: req => req.cookies.jwt,
          secretOrKey: process.env.JWT_SECRET

      }
      passport.use('jwt',
      new JWtStrategy(optionsJWT, (jwt_payload, done)=>{
          try {
              User.findOne({email:jwt_payload.id})
              .then (user => {
                  if (user){
                      console.log('User is found in the database')
                      done(null,user)
                  }else{ 
                  console.log('User not found in the database')
                  done(null, false)
                 }
              })

          }catch(error){
              done(errorr)

          }
      })
      )

      const optionsFacebook = {
          clientID:'172662087354270',
          clientSecret: '28589f9cbc13f8af6f6c36b6ae73f203',
          callbackURL: "http://localhost:5007/users/auth/facebook/callback",
          profileFields: ['id','displayName','email']
      }

      passport.use('facebook',
      new facebookStrategy(optionsFacebook,(accessToken,refreshToken,profile, done)=>{
          User.findOne({email : profile._json.email})
          .then(userData=>{
              if(!userData){
                  return done (null, false,{message: 'this is email is not registered!'})
              }else{
                  return done (null, userData)
              }

          })
          .catch(err => {
              done(err)
          })
      }) 
      )
}


