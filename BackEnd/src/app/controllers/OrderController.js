const Order = require('../models/Order');
const Product = require('../models/Product');
const Size = require('../models/Size');
const Color = require('../models/Color');
const Customer = require('../models/Customers');
const Address = require('../models/Address');
const { resgister } = require('./UserController');
class OrderController {
    async add(req, res) {
        try {
            const { userid, arr, addressOrder, total } = req.body;
            const order = await Order.create({
                userid,
                products: [],
                addressOrder,
                total
            });
            arr.map(arrs => {
                order.products.push(arrs)
            })
            const orders = await order.save();
            return res.status(200).json(orders);
        } catch (error) {
            res.status(500).json("loi server");
        }
    }
    async all(req, res) {
        Order.find({})
            .populate("userid")
            .populate("products.productId")
            .populate("products.size")
            .populate("products.color")
            .populate("addressOrder")
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json("loi server"))
    }
    async details(req, res) {
        const { id } = req.params;
        Order.find({ _id: id })
            .populate("userid")
            .populate("products.productId")
            .populate("products.size")
            .populate("products.color")
            .populate("addressOrder")
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json("loi server"))
    }
}
module.exports = new OrderController;