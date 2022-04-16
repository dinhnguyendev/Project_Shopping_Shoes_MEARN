const express = require('express');
const router = express.Router();
const productController = require('../app/controllers/ProductsController');

router.post('/add', productController.add);
router.get('/:slug', productController.show);
module.exports = router;