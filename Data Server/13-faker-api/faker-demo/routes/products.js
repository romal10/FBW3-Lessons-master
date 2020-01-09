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
           <td>  ${item.price} € </td>
           <td style="color: ${item.color} ">  ${item.color} </td>
           <td><button style "backgournd:red">Delete</button></td>
           </tr>`
        })
        //console.log(typeof allProducts);
        let thead = '<thead> <th>Name  </th><th>  Description</th><th> Price </th> <th> Color </th></thead>';
        let dataTable = '<table>'+thead+ rows + '</table>'
        res.send(dataTable)
    }
    catch(e){
        next(e);
    }
  res.send('<h3> all the products </h3>');
});
router.get('/add' , (req,res,next)=>{
    let newProduct = new Product({name : faker.commerce.productName(),
        price : faker.commerce.price(),
        color: faker.commerce.color(),
        description : faker.commerce.productAdjective()
       })
    newProduct.save(function (err , result){
        if(err) return console.error(err);
    })
    res.send('<h3> 10 products inserted </h3>');
})
module.exports = router;

