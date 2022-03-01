const express = require('express');
const router = express.Router();
const collectionController = require('../app/controllers/CollectionController');
const MiddlewareController = require('../app/controllers/MiddlewareController');

router.get('/all', collectionController.showall);
router.get('/:id', collectionController.showdetails);

module.exports = router;