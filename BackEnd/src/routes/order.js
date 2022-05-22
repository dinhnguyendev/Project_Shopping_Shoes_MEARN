const express = require('express');
const OrderController = require('../app/controllers/OrderController');
const router = express.Router();

router.post("/add", OrderController.add);
router.post("/updatepickup", OrderController.updatepickup);
router.post("/updatedeliver", OrderController.updatedeliver);
router.post("/check", OrderController.checkProduct);
router.post("/checkdelete", OrderController.checkdelete);
router.post("/deleteorder", OrderController.deleteorder);
router.get("/all", OrderController.all);
router.get("/:userid/all", OrderController.userIdall);
router.get("/:id/details", OrderController.details);
module.exports = router;