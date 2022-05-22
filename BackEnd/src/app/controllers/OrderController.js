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
                addressOrder: {
                    name: addressOrder.name,
                    phone: addressOrder.phone,
                    provinces: addressOrder.provinces,
                    citys: addressOrder.citys,
                    wars: addressOrder.wars,
                    details: addressOrder.addressOrder
                },
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
    checkProduct(req, res) {
        const { id, color, size } = req.body;
        Order.findOne({
            products: {
                $elemMatch: {
                    productId: id,
                    color,
                    size
                }
            }
            // $and: [
            //     {
            //         products: {
            //             $all: {
            //                 productId: id
            //             }
            //         }
            //     },
            //     {
            //         products: {
            //             $all: {
            //                 size
            //             }
            //         }
            //     },
            //     {
            //         products: {
            //             $all: {
            //                 color
            //             }
            //         }
            //     }
            //     // { "products.size": size },
            //     // { "products.color": color }
            // ]
        })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json(false))
    }
    checkdelete(req, res) {
        const { id } = req.body;
        Order.findOne({
            products: {
                $elemMatch: {
                    productId: id
                }
            }
        })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json("loi server"))
    }
    updatepickup(req, res) {
        const { id } = req.body;
        Order.updateOne({ _id: id }, {
            $set: {
                active: 2
            }
        })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json("loi server"))
    }
    updatedeliver(req, res) {
        const { id } = req.body;
        Order.updateOne({ _id: id }, {
            $set: {
                active: 3
            }
        })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json("loi server"))
    }
    userIdall(req, res) {
        const { userid } = req.params;
        Order.find({ userid })
            .populate('products.color')
            .populate('products.size')
            .populate('products.productId')
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json("loi server"))
    }
    deleteorder(req, res) {
        const { id } = req.body;
        Order.deleteOne({ _id: id })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json("loi server"))
    }
}
module.exports = new OrderController;