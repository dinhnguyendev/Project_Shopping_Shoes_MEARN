const jwt = require('jsonwebtoken');



const MiddlewareController = {
    verifiToken: (req, res, next) => {
        const token = req.headers.token;
        if (token) {
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN, (err, customer) => {
                if (err) {
                    return res.status(403).json("token is not value");
                }
                req.customer = customer;
                next();
            });
        } else {
            res.status(401).json("you are not authenticated");
        }
    },


    AdminToken: (req, res, next) => {
        MiddlewareController.verifiToken(req, res, () => {
            if (req.customer.admin) {
                next();
            } else {
                res.status(403).json("you are is ADMIN !!!");
            }
        })
    }
}
module.exports = MiddlewareController;