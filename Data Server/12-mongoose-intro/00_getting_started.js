const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shop', {useNewParser: true});

let productSchema = new mongoose.Schema({
    name: String,
    price: Number
});

// a class method for log messaging
productSchema.methods.logMessage = function () {
    let msg = `The product ${this.name} with the price ${this.price} has been inserted`;
    console.log(msg);
};

let Product = mongoose.model('Product', productSchema);

let samsung = new Product({ name: 'Samsung Galaxy One', price: 399.99});
console.log(samsung.name);
console.log(samsung.price);

let apple = new Product({ name: 'iPhone X', price: 4990.99});
console.log(apple.name);
console.log(apple.price);


let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log("we're connected!");

    // save samsung here
    samsung.save(function (err, samsung) {
        if (err) return console.error(err);
        // console.log('samsung saved!');
        samsung.logMessage();
        db.close();
    });

    // save apple here
    apple.save(function (err, apple) {
        if (err) return console.error(err);
        // console.log('apple saved!');
        apple.logMessage();
        db.close();
    });

});