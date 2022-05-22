const mongoose = require('mongoose');
const Category = require('./Category');
const Trademark = require('./Trademark');
const TrademarkDetails = require('./Brand');
const Size = require('./Size');
const Color = require('./Color');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const Product = new Schema({
    name: { type: String, require: true },
    price_now: { type: Number, require: true },
    price_last: { type: Number, require: false, default: 0 },
    quantity: { type: Number, require: false.valueOf, default: 0 },
    image: { type: String, require: true },
    details: { type: String },
    description: { type: String },
    slug: { type: String, slug: "name", unique: true },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        require: true
    },
    trademark: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'trademark',
        require: true
    },
    trademarkdetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'trademarkdetails',
        require: false
    },
    attributes: [
        {
            color: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'color',
                require: false
            },
            size: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'size',
                require: false
            },
            quantity: {
                type: Number,
            }
        }
    ],
    imagedetails: {
        type: Array,
        require: false
    }
}, {
    collection: 'product',
    timestamps: true
});

module.exports = mongoose.model('product', Product);
