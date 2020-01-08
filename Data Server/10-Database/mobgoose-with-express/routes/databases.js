const express = require('express')
const router = express.Router()



const Product = require('../models/Product')

router.get('/',  async (req, res, next)=>{

    try{
        const products = await Product.find()
        res.status(200).send(products)

    }
    
    catch(e){
        console.log(e)
    }

})





module.exports = router