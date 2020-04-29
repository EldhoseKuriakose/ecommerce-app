const mongoose = require('mongoose');

//Creating schema of product
const productSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    }
}, {
        timestamps: true
});

const Product = mongoose.model('Product', productSchema);

//Exporting module
module.exports = Product;