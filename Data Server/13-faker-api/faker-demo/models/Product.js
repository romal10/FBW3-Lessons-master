const mongoose = require ('mongoose');
let productSchema = new mongoose.Schema({
    name : String,
    price: Number,
    color : String,
    description : String
});
let product = mongoose.model('Product',productSchema);

module.exports = product;
