const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const route = require('./routes');
const db = require('./config/database/index');
const PORT = 5000;

db.connect();
dotenv.config();
//app use
app.use(morgan('combined'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
route(app);



app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost
    :${PORT}`)
})