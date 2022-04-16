const express = require('express');
const MiddlewareController = require('../app/controllers/MiddlewareController');
const router = express.Router();
const userController = require('../app/controllers/UserController');


router.post('/register', userController.resgister);
router.post('/login', userController.login);
router.post('/logout', MiddlewareController.verifiToken, userController.logout);
router.post('/refesh', userController.refeshToken);
router.post('/address/add', userController.address);
router.get('/address/:userid/all', userController.getAddressAll);
router.post('/address/delete', userController.deleteAddress);
router.post('/address/checked', userController.checked);
router.post('/address/unchecked', userController.unchecked);
router.post('/address/getchecked', userController.getchecked);


module.exports = router;