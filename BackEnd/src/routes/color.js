const express = require('express');
const router = express.Router();
const ColorController = require('../app/controllers/ColorController');

router.get("/all", ColorController.all);
module.exports = router;