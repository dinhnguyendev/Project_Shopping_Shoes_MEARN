const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug);
const Trademark = new Schema({
    name: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: false
    },
    slug: {
        type: String,
        slug: "name",
        unique: true
    }
},
    {
        collection: 'trademark',
        timestamps: true
    }
)
module.exports = mongoose.model('trademark', Trademark);