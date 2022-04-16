const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Address = new Schema({
    userid: {
        type: String,
        required: true
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
            },
            active: {
                type: Boolean,
                default: false
            }

        }
    ]
}, {
    timestamps: true,
    collection: "address"
});
module.exports = mongoose.model('address', Address);