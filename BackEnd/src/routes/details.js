const express = require('express');
const router = express.Router();
const detailsController = require('../app/controllers/DetailsController');


router.get('/:slug', detailsController.show);
module.exports = router;