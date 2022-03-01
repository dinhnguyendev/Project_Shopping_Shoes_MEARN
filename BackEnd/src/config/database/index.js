const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/project');
        console.log('connect sussecfully');
    } catch (error) {
        console.log('connect un sussecfully');
    }
}
module.exports = { connect };