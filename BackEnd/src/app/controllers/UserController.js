const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Customers = require('../models/Customers');


class UserController {
    async resgister(req, res) {
        try {
            const phone = await req.body.phone;
            const password = await req.body.password;
            const name = await req.body.name;
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(password, salt);
            const newCustomer = await Customers.create({
                phone,
                name,
                password: hashed
            })

            res.status(200).json(newCustomer)
        } catch (error) {
            res.status(500).json(error);
        }

    }

    async login(req, res) {
        try {
            const customer = await Customers.findOne({ phone: req.body.phone });
            if (!customer) {
                return res.status(404).json("phone unregistered");
            }
            // console.log(customer);
            // console.log(req.body.password);
            const encodePassword = await bcrypt.compare(req.body.password, customer.password);
            if (!encodePassword) {
                return res.status(405).json("password unregistered");
            }
            if (customer && encodePassword) {
                const tokensign = jwt.sign({
                    id: customer.id,
                    admin: customer.admin
                }, process.env.JWT_ACCESS_TOKEN,
                    { expiresIn: "55s" }
                );
                const refeshToken = jwt.sign({
                    id: customer.id,
                    admin: customer.admin
                }, process.env.JWT_REFESH_TOKEN,
                    { expiresIn: "10d" }
                );

                // save cookie
                res.cookie("refeshToken", refeshToken, {
                    httpOnly: true,
                    secure: false,
                    path: "/",
                    samesite: "strict"
                });
                const { password, ...pre } = customer._doc;
                return res.status(200).json({ ...pre, tokensign });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
    async refeshToken(req, res) {
        const refeshToken = req.cookies.refeshToken;
        if (!refeshToken) {
            return res.status(401).json("you are not login");
        }
        jwt.verify(refeshToken, process.env.JWT_REFESH_TOKEN, (err, customer) => {
            if (err) {
                return res.status(403).json(err);
            }
            const newTokenAccess = jwt.sign({
                id: customer.id,
                admin: customer.admin
            }, process.env.JWT_ACCESS_TOKEN,
                { expiresIn: "55s" }
            );
            const newTokenRefesh = jwt.sign({
                id: customer.id,
                admin: customer.admin
            }, process.env.JWT_REFESH_TOKEN,
                { expiresIn: "10d" }
            );
            res.cookie("refeshToken", newTokenRefesh, {
                httpOnly: true,
                secure: false,
                path: "/",
                samesite: "strict"
            });
            res.status(200).json({ tokensign: newTokenAccess });
        })
    }
    async logout(req, res) {
        res.clearCookie("refeshToken");
        res.status(200).json("logout is successfully");
    }
}
module.exports = new UserController;