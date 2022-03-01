const express = require('express');
const router = express.Router();
const indexController = require('../app/controllers/IndexController');



router.get('/', indexController.showindex);


module.exports = router;