const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Color = new Schema({
    name: { type: String, require: true }
}, {
    collection: 'color',
    timestamps: true
})
module.exports = mongoose.model('color', Color);