const mongoose = require('mongoose');
const Size = require('../models/Size');
const Color = require('../models/Color');
const Product = require('../models/Product');
const Address = require('../models/Address');
const Schema = mongoose.Schema;
const Order = new Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
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
        }
    ],
    addressOrder: {
        name: {
            type: String,
        },
        phone: {
            type: String,
        },
        provinces: {
            type: String,
        },
        citys: {
            type: String,
        },
        wars: {
            type: String,
        },
        details: {
            type: String,
        },
    },
    active: {
        type: Number,
        default: 1
    },
    total: {
        type: Number,
        require: true
    }
}, {
    timestamps: true,
    collection: "order"
});
module.exports = mongoose.model("order", Order);