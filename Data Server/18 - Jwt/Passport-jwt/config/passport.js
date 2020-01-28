const LocalStrategy  = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const JWtStrategy = require ('passport-jwt').Strategy;
const passport = require('passport')
const jwt = require ('jsonwebtoken')
const facebookStrategy = require ('passport.facebook').Strategy;

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
                        return done(null,userData)

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
          callbackUrl: "http://localhost:5007/users/auth/facebook/callback",
          profileFields: ['id','displayName','email']
      }

      passport.use('facebook',
      new facebookStrategy(optionsFacebook,(accessToken,refreshToken,profile, done)=>{
          profileUser.findOne({email : profile._json.email})
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


