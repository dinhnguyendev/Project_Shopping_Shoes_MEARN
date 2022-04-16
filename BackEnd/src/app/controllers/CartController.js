const Cart = require('../models/Cart');
const Customers = require('../models/Customers');
const Product = require('../models/Product');
const Size = require('../models/Size');
const Color = require('../models/Color');

class CartController {
    showall(req, res) {
        const userid = req.params.userid;
        Cart.find({ userid })
            .populate('products.productId')
            .populate('products.size')
            .populate('products.color')
            .then(data => {
                return data[0].products;
            })
            .then(data => res.status(200).json(data))
            .catch(error => res.status(500).json("Loi server"))
    }
    async addToCart(req, res) {
        const { userid, productId, color, size, quantity, price } = await req.body;
        const quantitys = Number(quantity);
        try {
            const cart = await Cart.findOne({ userid });
            if (cart) {
                var item = cart.products.findIndex(arr => arr.productId == productId && arr.size == size && arr.color == color);
                if (item > -1) {
                    const productDetails = cart.products[item];
                    const numberNow = Number(productDetails.quantity);
                    console.log(numberNow)
                    console.log(quantitys)
                    console.log(typeof numberNow)
                    productDetails.quantity = numberNow + quantitys;
                    cart.products[item] = productDetails;
                } else {
                    cart.products.push({
                        productId,
                        size,
                        color,
                        quantity,
                        price
                    });
                }
                await cart.save();
                return res.status(201).json(cart);

            } else {
                const CreateCart = await Cart.create({
                    userid,
                    products: [
                        {
                            productId,
                            size,
                            color,
                            quantity,
                            price
                        }
                    ]
                });

                return res.status(201).json(CreateCart);

            }
        } catch (error) {
            console.log(error);
            res.status(500).json("loi server");
        }

        // Cart.findOne({
        //     userid
        // })
        //     .then(data => res.status(200).json(data))
        //     .catch(error => res.status(500).json("loi server"))

        // Cart.create({
        //     userid,
        //     products: [
        //         {
        //             productId,
        //             size,
        //             color,
        //             quantity,
        //             price
        //         }
        //     ],

        // })
        //     .then(data => res.status(200).json("them thanh cong"))
        //     .catch(error => res.status(500).json("loi server"))

    }
    updateNumberCart(req, res) {
        const { userid, index, numbers } = req.body;
        Cart.updateOne({ userid },
            {
                $set: {
                    [`products.${index}.quantity`]: numbers
                }
            }
        )
            .then(data => res.status(200).json(data))
            .catch(error => res.status(500).json("loi server"))

    }
    delete(req, res) {
        const { userid, productid } = req.body;
        Cart.updateOne({ userid },
            { $pull: { products: { _id: productid } } }
        )
            .then(data => res.status(200).json(data))
            .catch(error => res.status(500).json("loi server"))
    }
    checked(req, res) {
        const { userid, index } = req.body;
        const number = Number(index);
        Cart.updateOne({ userid }, {
            $set: {
                [`products.${number}.active`]: true
            }
        }
        )
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json("Loi server"))
    }
    unchecked(req, res) {
        const { userid, index } = req.body;
        const number = Number(index);
        Cart.updateOne({ userid }, {
            $set: {
                [`products.${number}.active`]: false
            }
        }
        )
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json("Loi server"))
    }
    setchecked(req, res) {
        const { userid } = req.body;
        Cart.updateOne({ userid }, {
            $set: {
                "products.$[].active": false
            }
        }
        )
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json("Loi server"))
    }
    getpay(req, res) {
        const { userid } = req.body;
        Cart.find({ userid }, { $match: { products: { active: true } } })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json('loi server'));
    }
}
module.exports = new CartController;