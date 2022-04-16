const express = require('express');
const collectionRouter = require('./collection');
const indexRouter = require('./indexhome');
const navbarRouter = require('./navbar');
const userRouter = require('./user');
const orderRouter = require('./order');
const productRouter = require('./products');
const cartRouter = require('./cart');
function route(app) {
    app.use('/collection', collectionRouter);
    app.use('/navbar', navbarRouter);
    app.use('/products', productRouter);
    app.use('/cart', cartRouter);
    app.use('/user', userRouter);
    app.use('/order', orderRouter);
    app.use('/', indexRouter);
}
module.exports = route;