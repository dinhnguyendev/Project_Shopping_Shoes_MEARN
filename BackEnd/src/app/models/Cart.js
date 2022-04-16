const mongoose = require('mongoose');
const Customers = require('./Customers');
const Product = require('./Product');
const Size = require('./Size');
const Color = require('./Color');
const Schema = mongoose.Schema;
const Cart = new Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer'
    },
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'product'

            },
            size: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'size'
            },
            color: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'color'
            },
            quantity: Number,
            price: Number,
            active: {
                type: Boolean,
                default: false
            },
        }
    ],

}, {
    timestamps: true,
    collection: 'cart'
});
module.exports = mongoose.model('cart', Cart);