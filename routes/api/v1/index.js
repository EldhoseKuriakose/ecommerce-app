//impoting libraries
const express = require('express');
const router = express.Router();
const productController = require('../../../controllers/api/v1/api.product_controller');


//Routes
router.get('/', productController.getAllData);
router.post('/create', productController.createProduct);
router.delete('/:id', productController.deleteProduct);
router.post('/:id/update_quantity', productController.updateQuantity);

module.exports = router;