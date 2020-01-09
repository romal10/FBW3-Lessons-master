let express = require('express');
let router = express.Router();
let faker = require('faker');
let Product = require('../models/Product');


/* GET Products listing. */
router.get('/', async function(req, res, next) {  
    try {        
        const allProducts = await Product.find();
        let rows ='';
        allProducts.forEach((item)=>{
           rows += `<tr>
           <td> ${item.name} </td>
           <td>  ${item.description} </td>
           <td>  ${item.price}  € </td>
           <td style="color: ${item.color} ">  ${item.color} </td>
           <td> <button onClick=window.location="http://localhost:3000/products/delete?id=${item._id}" style ="background:red;color:white;"> Delete </button> </td>
           </tr>`

        })
        //console.log(typeof allProducts);
        let addDiv = `<div> <button style='padding:5px;background:limegreen; border-radius:15px; color:white;font-weight:bold' onclick='window.location ="http://localhost:3000/products/add"'> Add one product </button> </div>`;
        let thead = '<thead> <th>Name  </th><th>  Description</th><th> Price </th> <th> Color </th><th> delete</th></thead>';
        let dataTable = addDiv+'<table>'+thead+ rows + '</table>'
        res.send(dataTable)
    }
    catch(e){
        next(e);

    }

});

router.get('/delete' , (req, res ,next)=>{
    let productID = req.query.id;
    Product.deleteOne({_id:productID}, (err,result)=>{
        if(err) throw err;        

    });
    res.redirect('http://localhost:3000/products/');

})

router.get('/add' , (req,res,next)=>{
    let newProduct = new Product({name : faker.commerce.productName(),
        price : faker.commerce.price(),
        color: faker.commerce.color(),
        description : faker.commerce.productAdjective()                  
       
       })

    newProduct.save(function (err , result){
        if(err) return console.error(err);


    });
    res.redirect('http://localhost:3000/products/');
    //res.send('<h3> one product inserted </h3>');
   
})
module.exports = router;