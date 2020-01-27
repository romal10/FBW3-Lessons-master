const LocalStrategy  = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const JWtStrategy = require ('passport-jwt').Strategy;
const passport = require('passport')

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
          jwtFromRequest: req => require.cookies.jwt,
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

}


