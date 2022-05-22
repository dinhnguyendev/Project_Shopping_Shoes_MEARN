const Product = require('../models/Product');
const TrademarkDetails = require('../models/Brand');
const Trademark = require('../models/Trademark');
const multer = require('multer');
// import '../../../src/uploads/'
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

class DetailsController {
    all(req, res) {
        Product.find({})
            .populate('category')
            .populate('trademark')
            .populate('trademarkdetails')
            .then(data => res.status(200).json(data))
            .catch(err => res.redirect('http://localhost:3000/error'));
    }
    show(req, res) {
        const slug = req.params.slug;
        Product.findOne({ slug: slug })
            .populate('attributes.color')
            .populate('attributes.size')
            .then(data => res.status(200).json(data))
            .catch(err => res.redirect('http://localhost:3000/error'));
    }
    async add(req, res) {
        multipleUpload(req, res, async function (err) {
            if (!err) {
                const categorys = await req.body.category;
                const trademarks = await req.body.trademark;
                const names = await req.body.name;
                const trademarkdetailss = await req.body.trademarkdetails;
                const price_nows = await req.body.price_now;
                const price_lasts = await req.body.price_last;
                const detailss = await req.body.details;
                const descriptions = await req.body.description;
                const image = await req.files['image'][0].filename;
                const imagemultiple = await req.files['imagedetails'];
                const imagedetails = [];
                console.log("imagemultiple");
                console.log(categorys);
                for (let i = 0; i < imagemultiple.length; i++) {
                    imagedetails.push(imagemultiple[i].filename);
                }
                Product.create({
                    name: names,
                    price_now: price_nows,
                    price_last: price_lasts,
                    image,
                    details: detailss,
                    description: descriptions,
                    category: categorys,
                    trademark: trademarks,
                    trademarkdetails: trademarkdetailss,
                    imagedetails
                })
                    .then(data => res.status(200).json(data))
                    .catch(err => console.log(err));
            }
        })
    }
    fix(req, res) {
        const { slug } = req.params;
        Product.findOne({ slug })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json("Loi server"))
    }
    async fixnoimage(req, res) {
        multipleUpload(req, res, async function (err) {
            if (!err) {
                const id = await req.body.id;
                const categorys = await req.body.category;
                const trademarks = await req.body.trademark;
                const names = await req.body.name;
                const trademarkdetailss = await req.body.trademarkdetails;
                const price_nows = await req.body.price_now;
                const price_lasts = await req.body.price_last;
                const detailss = await req.body.details;
                const descriptions = await req.body.description;
                console.log(id,
                    categorys,
                    trademarks,
                    names,
                    trademarkdetailss,
                    price_nows,
                    price_lasts,
                    detailss,
                    descriptions);
                Product.updateOne({
                    _id: id
                }, {
                    $set: {
                        name: names,
                        price_now: price_nows,
                        price_last: price_lasts,
                        details: detailss,
                        description: descriptions,
                        category: categorys,
                        trademark: trademarks,
                        trademarkdetails: trademarkdetailss,
                    }
                })
                    .then(data => res.status(200).json(data))
                    .catch(err => res.status(500).json("Loi server"))
            }
        })

    }
    async fiximage(req, res) {
        multipleUpload(req, res, async function (err) {
            if (!err) {
                const id = await req.body.id;
                const categorys = await req.body.category;
                const trademarks = await req.body.trademark;
                const names = await req.body.name;
                const trademarkdetailss = await req.body.trademarkdetails;
                const price_nows = await req.body.price_now;
                const price_lasts = await req.body.price_last;
                const detailss = await req.body.details;
                const descriptions = await req.body.description;
                const image = await req.files['image'][0].filename;
                Product.updateOne({
                    _id: id
                }, {
                    $set: {
                        name: names,
                        price_now: price_nows,
                        price_last: price_lasts,
                        details: detailss,
                        image,
                        description: descriptions,
                        category: categorys,
                        trademark: trademarks,
                        trademarkdetails: trademarkdetailss,
                    }
                })
                    .then(data => res.status(200).json(data))
                    .catch(err => res.status(500).json("Loi server"))
            }
        })

    }
    async fiximagedetails(req, res) {
        multipleUpload(req, res, async function (err) {
            if (!err) {
                const id = await req.body.id;
                const categorys = await req.body.category;
                const trademarks = await req.body.trademark;
                const names = await req.body.name;
                const trademarkdetailss = await req.body.trademarkdetails;
                const price_nows = await req.body.price_now;
                const price_lasts = await req.body.price_last;
                const detailss = await req.body.details;
                const descriptions = await req.body.description;
                const imagemultiple = await req.files['imagedetails'];
                const imagedetails = [];
                for (let i = 0; i < imagemultiple.length; i++) {
                    imagedetails.push(imagemultiple[i].filename);
                }

                Product.updateOne({
                    _id: id
                }, {
                    $set: {
                        name: names,
                        price_now: price_nows,
                        price_last: price_lasts,
                        details: detailss,
                        imagedetails,
                        description: descriptions,
                        category: categorys,
                        trademark: trademarks,
                        trademarkdetails: trademarkdetailss,
                    }
                })
                    .then(data => res.status(200).json(data))
                    .catch(err => res.status(500).json("Loi server"))
            }
        })

    }
    async fixproduct(req, res) {
        multipleUpload(req, res, async function (err) {
            if (!err) {
                const id = await req.body.id;
                const categorys = await req.body.category;
                const trademarks = await req.body.trademark;
                const names = await req.body.name;
                const trademarkdetailss = await req.body.trademarkdetails;
                const price_nows = await req.body.price_now;
                const price_lasts = await req.body.price_last;
                const detailss = await req.body.details;
                const descriptions = await req.body.description;
                const image = await req.files['image'][0].filename;
                const imagemultiple = await req.files['imagedetails'];
                const imagedetails = [];
                for (let i = 0; i < imagemultiple.length; i++) {
                    imagedetails.push(imagemultiple[i].filename);
                }

                Product.updateOne({
                    _id: id
                }, {
                    $set: {
                        name: names,
                        price_now: price_nows,
                        price_last: price_lasts,
                        details: detailss,
                        image,
                        imagedetails,
                        description: descriptions,
                        category: categorys,
                        trademark: trademarks,
                        trademarkdetails: trademarkdetailss,
                    }
                })
                    .then(data => res.status(200).json(data))
                    .catch(err => res.status(500).json("Loi server"))
            }
        })

    }
    async adddetails(req, res) {
        const { color, size, number, slug } = req.body.dataSubmit;
        console.log(color);
        console.log(size);
        console.log(number);
        console.log(slug);
        const quantity = await Number(number);
        const product = await Product.findOne({ slug })
        try {
            if (product) {
                var item = product.attributes.findIndex(arr => arr.color == color && arr.size == size);
                if (item > -1) {
                    const productUpdate = product.attributes[item];
                    const quantityUpdate = Number(productUpdate.quantity);
                    productUpdate.quantity = await quantityUpdate + quantity;
                    console.log(productUpdate.quantity);
                    product.attributes[item] = productUpdate;
                } else {
                    product.attributes.push({
                        color,
                        size,
                        quantity
                    })
                }
                const total = Number(product.quantity);
                product.quantity = total + quantity;
                const products = await product.save();

                return res.status(200).json(products)
            }
            // Product.findOneAndUpdate({ _id: id }, {
            //     $set: {
            //         quantity: total
            //     }
            // })
            //     .then(data => res.status(200).json(data))
            //     .catch(err => res.status(500).json("loi server"))

        } catch (error) {
            return res.status(500).json("loi server !!!");
        }
    }
    async deletedetails(req, res) {
        const { iddetails, slug, number } = req.body;
        const numbers = Number(number);
        Product.updateMany({ slug }, {
            $pull: { attributes: { _id: iddetails } },
            $inc: { "quantity": - numbers }
        })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json("loi server"))

    }
    delete(req, res) {
        const { slug } = req.body;
        Product.deleteOne({ slug })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json("loi server"))
    }
    trademark(req, res) {
        const { name } = req.body;
        Trademark.create({
            name
        })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json("loi server"))
    }
    getallcategory(req, res) {
        Trademark.find({})
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json("loi server"))
    }
    barn(req, res) {
        const { name, idtrademark } = req.body;
        TrademarkDetails.create({
            name,
            idtrademark
        })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json("loi server"))

    }
    search(req, res) {
        const { name } = req.params;
        console.log(name);
        const search = name.toUpperCase();
        console.log(name);
        Product.find({
            name: {
                $regex: search
            }
        })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json("loi server"))

    }

}
module.exports = new DetailsController;