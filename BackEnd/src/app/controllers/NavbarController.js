const Category = require('../models/Category');
const Trademark = require('../models/Trademark');
const Trademarkdetails = require('../models/Brand');
class NavbarController {
    showall(req, res) {
        Category.find({})
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json('loi server'))
    }
    trademark(req, res) {
        Trademark.find({})
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json('loi server'))
    }
    trademarkdetails(req, res) {
        const { idtrademark } = req.params;
        console.log(idtrademark)
        Trademarkdetails.find({
            idtrademark
        })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json('loi server'))
    }


}
module.exports = new NavbarController;