const mongoose = require('mongoose');
const Trademark = require('../models/Trademark');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug);
const Brand = new Schema({
    name: { type: String },
    idtrademark: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'trademark',
        default: ''

    },
    image: { type: String, require: false },
    slug: { type: String, unique: true, slug: "name" }
},
    {
        collection: 'trademarkdetails',
        timestamps: true
    }
)
module.exports = mongoose.model('trademarkdetails', Brand);