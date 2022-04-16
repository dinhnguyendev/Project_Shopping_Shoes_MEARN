const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Customers = new Schema({
    phone: {
        type: String,
        minlength: 10,
        maxlength: 13,
        required: true,
        unique: true
    },
    name: { type: String, default: '' },
    email: { type: String, default: '' },
    name_shop: { type: String, default: '' },
    gender: { type: String, default: '' },
    email: { type: String, default: '' },
    avatar: { type: String, default: '' },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    address: [
        {
            name: {
                type: String,
                default: ''
            },
            phone: {
                type: String,
                default: ''
            },
            provinces: {
                type: String,
                default: ''
            },
            citys: {
                type: String,
                default: ''
            },
            wars: {
                type: String,
                default: ''
            },
            details: {
                type: String,
                default: ''
            }

        }
    ]

}, {
    collection: 'customers',
    timestamps: true
});
module.exports = mongoose.model('customer', Customers);