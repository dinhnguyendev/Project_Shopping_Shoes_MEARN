const express = require('express');
const router = express.Router();
const CartController = require('../app/controllers/CartController');


router.get('/:userid/all', CartController.showall);
router.post('/add', CartController.addToCart);
router.post('/updatenumbercart', CartController.updateNumberCart);
router.post('/delete', CartController.delete);
router.post('/checked', CartController.checked);
router.post('/unchecked', CartController.unchecked);
router.post('/setchecked', CartController.setchecked);
router.post('/getpay', CartController.getpay);

module.exports = router;