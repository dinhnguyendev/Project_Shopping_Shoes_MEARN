const express = require('express');
const router = express.Router();
const navbarController = require('../app/controllers/NavbarController');

router.get('/category', navbarController.showall);
router.get('/trademark', navbarController.trademark);
router.get('/trademarkdetails/:idtrademark', navbarController.trademarkdetails);

module.exports = router;