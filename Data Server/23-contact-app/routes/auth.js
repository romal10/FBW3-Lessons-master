const express = require('express');
const { check , validationResult} = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // json web token for authentication
const router = express.Router();
const auth= require("../middleware/auth");



// @route   Get api/auth
// @desc    Get loggedin user
// @access  Private
router.get('/',auth,async(req ,res) => {
   try {
       const user=await User.findById(req.user.id).select('-password');
       if(!user){
           return res.status(500).send('Server Error..!');
       }
       res.json(user);
    } catch (error) {
       console.log(error)
        res.status(500).send('server  Error..!')   
    }
});





// @route   POST api/auth
// @desc    Auth user & get token
// @access  Public
router.post('/',[
    check('email', 'Please enter a valid email').isEmail(),
    check('password','Password is required').exists()
], async (req ,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array()});
    }


    // check email and password
    const { email , password } = req.body;


    try {
        let user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({ msg : 'Invalid Credentials '  });
        }


            // the password is the user will he put , the user.password is in the Data Base
         
        const isMatch = await bcrypt.compare(password , user.password);
        if(!isMatch){
            return res.status(400).json({ msg : 'Invalid Credentials '  });
        }




        //generete token
        const payload = {
            user : {
                id:user.id
            }
        }
        jwt.sign(payload,process.env.JWT_SECRET,{
            // the token link will end after 1  Hour
            expiresIn:3600
        },(err , token)=> {
            if(err) throw err;
            res.json({ token })
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error')
    }
});
module.exports = router