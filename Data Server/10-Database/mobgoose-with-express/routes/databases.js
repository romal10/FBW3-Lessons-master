const express = require('express')
const router = express.Router()

const Product = require('../models/Product')

router.get('/',async function(req,res,next){
    let name = req.query.name;
    let price = req.query.price;
    try{
        const products = await Product.find()
        res.status(200).send(products)
    }
    catch(e){
        next(e)
    }
    
})


// search and update 
router.update('/:productId',async function(req,res,next){
    let productId=req.params.productId;
    let name = req.query.name;
    let price = req.query.price;
    try{
        const products = await Product.findByIdAndUpdate(productId, 
            )
        res.status(200).send(products)
    }
    catch(e){
        next(e)
    }
    
})



module.exports = router