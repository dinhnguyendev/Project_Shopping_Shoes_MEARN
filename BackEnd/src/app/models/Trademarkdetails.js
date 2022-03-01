const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
const Trademarkdetails = new Schema({
    name: { type: String },
    image: { type: String, require: true },
    slug: { type: String, unique: true, slug: 'name' }
}, {
    collection: 'trademarkdeatils'
});
module.exports = mongoose.model('trademarkdetails', Trademarkdetails);