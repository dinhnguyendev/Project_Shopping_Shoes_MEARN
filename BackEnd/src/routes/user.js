const express = require('express');
const MiddlewareController = require('../app/controllers/MiddlewareController');
const router = express.Router();
const userController = require('../app/controllers/UserController');


router.post('/register', userController.resgister);
router.post('/login', userController.login);
router.post('/logout', MiddlewareController.verifiToken, userController.logout);
router.post('/refesh', userController.refeshToken);


module.exports = router;