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
router.get('/getinfomation/:userid', userController.getinfomation);
router.post('/updateinfomation/noimage', userController.updateinfomationnoimage);
router.post('/updateinfomation/image', userController.updateinfomationimage);
router.get('/address/:userid/:idaddress', userController.getAddressbyId);



module.exports = router;