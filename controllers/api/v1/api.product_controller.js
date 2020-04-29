//importing library
const mongoose = require('mongoose');
const Product = require('../../../models/product');

//For getting created products details
module.exports.getAllData = async function(req, res){
    try {
        //selecting id, name and quantity from product 
        let ans = await Product.find({}).select('_id name quantity');
        //If product found display it
        if(ans.length > 0){
            return res.status(200).json({
                products: ans
            });
        } else{
            //No products found
            return res.status(200).json({
                message: "No data found"
            });
        }
        
    } catch (err) {
        //Error in getting products details
        return res.status(500).json({
            message: "Error in getting products"
        });
    }
}



//Creating Product
module.exports.createProduct = async function(req, res){
    try {
        //creating new product
        let products = await Product.create({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            quantity: req.body.quantity
        });

        //saving created product
        products.save();
        return res.status(200).json({
            data: {
                //displays created product name and quantity
                name: products.name,
                quantity: products.quantity
            }
        })
    } catch (err) {
        //Error in creating product
        console.log(err);
        return res.status(500).json({
            message: "Unable to save data"
        });
    }
}


//Deleting Product with id
module.exports.deleteProduct = async function(req, res){
    try {
        //Finding product with id
        const id = req.params.id;
        let products = await Product.findOne({_id: req.params.id});
        //Deleting product
        let ans = await Product.remove({_id: id});
        return res.status(200).json({
            data: {
                message: "Product deleted"
            }
        });
    } catch (err) {
        //Error in deleting product
        return res.status(500).json({
            status: 500,
            message: "Error in deleting product"
        });
    }
}



//Update product quantity
module.exports.updateQuantity = async function(req, res){
    try {
        //Finding product with id
        const id = req.params.id;
        let products = await Product.findOne({_id: req.params.id});
        //updating quantity
        let ans = await Product.update({_id: id}, {$set: {quantity: Number(products.quantity) + Number(req.query.number)}});
        let result = await Product.findOne({_id: req.params.id}).select('_id name quantity');
        return res.status(200).json({
            //Displays updated product details
            product: result,
            message: "Quantity Updated Successfully"
        });
    } catch (err) {
        //Error in updating quantity
        return res.status(500).json({
            message: "Quantity Updation Failed"
        });
    }
}