const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const Category = new Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    slug: {
        type: String,
        slug: 'name',
        unique: true
    }
},
    {
        collection: 'category',
        timestamps: true
    });
module.exports = mongoose.model('category', Category);
