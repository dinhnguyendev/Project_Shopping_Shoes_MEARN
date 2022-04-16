const Product = require('../models/Product');
const TrademarkDetails = require('../models/Brand');
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

class DetailsController {
    show(req, res) {
        const slug = req.params.slug;
        Product.findOne({ slug: slug })
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
}
module.exports = new DetailsController;