const express = require('express');
const router = express.Router();
const auth= require("../middleware/auth");
const User = require('../models/User');
const { check , validationResult} = require('express-validator');
const   Contact=require("../models/contact");




// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private
router.get('/',auth,async(req ,res) => {
   
    try {
        const GetUsers=await Contact.find({ user:req.user.id }).sort({date:-1});
        res.json(GetUsers);
   } catch (error) {
       console.log(error.message);
       res.status(500).send('Server Error..!')
   }
});




// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post('/',[auth,[
    check('name','Name is required..!').not().isEmpty(),
    check('email','Email is required..!').isEmail(),

]],async(req ,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array()});
    }

    // passed
    const{name,email,phone,type}=req.body;

    try {
        const newContact=new Contact({
            name,email,phone,type,
            user:req.user.id
        });

        const contact=await newContact.save();
        res.json(contact);

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
});




// @route   PUT api/contacts
// @desc    Update contact
// @access  Private
router.put('/:id',auth,async(req ,res) => {
    const{name,email,phone,type}=req.body;
    
    console.log(req.user)
    // build contact
    let contactFields={};

    if(name){
        contactFields.name=name;
    }
    if(email){
        contactFields.email=email;
    }
    if(phone){
        contactFields.phone=phone;
    }
    if(type){
        contactFields.type=type;
    }

    //as above or if we have only onle line it will works without curley brackets
    // if(name) contactFields.name=name;
    // if(email) contactFields.email=email;
    // if(phone) contactFields.phone=phone;
    // if(type) contactFields.type=type;
 

    try {
        let contact=await Contact.findById(req.params.id);

        if(!contact){
           
            res.status(404).json({msg:'Contact is not found..!'})
        }

    
        // to make sure if the user owns the contact
        if(contact.user.toString() !== req.user.id){
            res.status(401).json({msg:'Not authorized..!'})
        }


        contact=await Contact.findByIdAndUpdate(req.params.id,
            // the dollar sign is to update the objects in MongoDB
            {$set: contactFields},
            {new:true}
        );

        res.send(contact);

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error..!')
    }

});




// @route   DELETE api/contacts
// @desc    Delete contact
// @access  Private
router.delete('/:id',auth,async(req ,res) => {
    console.log(req.user)
   try {
        //we will get the contact's ID from the URL parameter
        let contact=await Contact.findById(req.params.id);

        if(!contact){       
            res.status(404).json({msg:'Contact is not found..!'})
        }

        
        // to make sure if the user owns the contact
        if(contact.user.toString() !== req.user.id){
            res.status(401).json({msg:'Not authorized..!'})
        }

        contact=await Contact.findByIdAndRemove(req.params.id);
        res.send('contact deleted')
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error..!')
   }
});



module.exports = router