const express = require('express');
const OrderController = require('../app/controllers/OrderController');
const router = express.Router();

router.post("/add", OrderController.add);
router.get("/all", OrderController.all);
router.get("/:id/details", OrderController.details);
module.exports = router;