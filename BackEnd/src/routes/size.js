const express = require('express');
const router = express.Router();
const SizeController = require('../app/controllers/SizeController');

router.get("/all", SizeController.all);
module.exports = router;