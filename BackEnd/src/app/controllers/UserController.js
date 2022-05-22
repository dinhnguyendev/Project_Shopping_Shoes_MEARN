const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Customers = require('../models/Customers');
const Address = require('../models/Address');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const filename = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, filename + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })
const multipleUpload = upload.fields([{ name: 'image', maxCount: 1 }, { name: 'imagedetails', maxCount: 80 }])


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
                    { expiresIn: "365d" }
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
    async address(req, res) {
        const { userid, name, phone, provincesAddress, cityAddress, warsAddress, detailsAddress } = req.body.address;
        const add = await Address.findOne({ userid });
        // console.log(add);
        try {
            if (add) {
                add.address.push({
                    name,
                    phone,
                    provinces: provincesAddress,
                    citys: cityAddress,
                    wars: warsAddress,
                    details: detailsAddress
                })
                await add.save();
                return res.status(200).json(add);
            } else {
                const addAddress = await Address.create({
                    userid,
                    address: [
                        {
                            name,
                            phone,
                            provinces: provincesAddress,
                            citys: cityAddress,
                            wars: warsAddress,
                            details: detailsAddress
                        }
                    ]
                })
                return res.status(200).json(addAddress)
            }
        } catch (error) {
            res.status(500).json("loi server")
        }
    }
    getAddressAll(req, res) {
        const { userid } = req.params;
        // console.log(userid);
        Address.findOne({ userid })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json("loi server"))
    }
    deleteAddress(req, res) {
        const { userid, idAddress } = req.body;
        Address.updateOne({ userid }, {
            $pull: {
                address: { _id: idAddress }
            }
        })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json("loi server"))
    }
    async getAddressbyId(req, res) {
        const { userid, idaddress } = req.params;
        console.log(userid);
        console.log(idaddress);
        const addr = await Address.findOne({
            userid
        })
        const ress = await addr.address.filter(data => data._id == idaddress);
        res.status(200).json(ress);

    }
    getinfomation(req, res) {
        const { userid } = req.params;
        Customers.findOne({ _id: userid })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json("Loi server"))

    }
    updateinfomationnoimage(req, res) {
        const { userid, name, gender, name_shop, email } = req.body;
        console.log(userid);
        console.log(name);
        console.log(gender);
        console.log(name_shop);
        console.log(email);
        Customers.updateOne({ _id: userid }, {
            $set: {
                name, gender, name_shop, email
            }
        })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json("Loi server"))

    }
    async updateinfomationimage(req, res) {
        multipleUpload(req, res, async function (err) {
            if (!err) {
                const userid = req.body.userid;
                const name = req.body.name;
                const gender = req.body.gender;
                const name_shop = req.body.name_shop;
                const email = req.body.email;
                const image = await req.files['image'][0].filename;
                console.log(userid);
                console.log(gender);
                console.log(name);
                console.log(name_shop);
                console.log(image);
                Customers.updateOne({ _id: userid }, {
                    $set: {
                        name, gender, name_shop, email,
                        avatar: image
                    }
                })
                    .then(data => res.status(200).json(data))
                    .catch(err => res.status(500).json("Loi server"))
            }
        })

    }

}
module.exports = new UserController;