const express = require('express');
const router = express.Router();
const { check , validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt=require('jsonwebtoken');



// this code to create a user...





// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post('/',[
    check('name' , 'name is required').not().isEmpty(),
    check('email','Please enter a valid email').isEmail(),
    check('password','Please enter a password with 6 or more characters')
    .isLength({min:6 })
] ,async (req ,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array()});
    }

   // passed
   const { name, email ,password } = req.body;


   try {
    let user = await User.findOne({email});
    if(user){
        return res.status(400).json({ msg : 'User already exist'  });
    }

    user = new User({
        name,
        email,
        password
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password , salt);
    await user.save();


    const payload={
        user:{
            id:user.id
        }
    }

    // create the Token
    jwt.sign(payload,process.env.JWT_SECRET,{
        // the token link will end after 1  Hour
        expiresIn:3600
    },(err,token)=>{
        if(err) throw err;
        res.json({token})
    })


   } catch (error) {
       console.log(error);
       res.status(500).send(' Server Error')
   }
});



module.exports = router