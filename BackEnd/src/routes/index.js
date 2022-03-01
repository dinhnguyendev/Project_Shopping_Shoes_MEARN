const express = require('express');
const collectionRouter = require('./collection');
const indexRouter = require('./indexhome');
const userRouter = require('./user');
const detailsRouter = require('./details');

function route(app) {
    app.use('/collection', collectionRouter);
    app.use('/products', detailsRouter);
    app.use('/user', userRouter);
    app.use('/', indexRouter);
}
module.exports = route;