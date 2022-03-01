const Product = require('../models/Product');
const Category = require('../models/Category');
const Trademark = require('../models/Trademark');
const TrademarkDetails = require('../models/TrademarkDetails');
class CollectionController {
    showall(req, res) {
        // Product.create({
        //     name: "giay nike mercurial superly 7",
        //     price_now: 455000,
        //     price_last: 390000,
        //     quantity: 50,
        //     image: '',
        //     details: "giay da bóng nhân tạo đẹp",
        //     description: "bền đẹp hợp với lối đá thiên về yếu tố kiểm soát",
        //     category: '6201f3928a38219611abc46d',
        //     trademark: "620210948f236137bb376bd3"
        // })
        //     .then(data => console.log(data))
        //     .catch(err => console.log(err))
        // TrademarkDetails.create({
        //     name: "giay da banh nike",
        //     trademarkdetails: '620200d3a4b988ad94ebaafe'
        // })
        // .then(data => console.log(data))
        //  .catch(err => console.log(err))
        Product.find({

        })
            .populate('category')
            .populate('trademark')

            .then(data => res.status(200).json(data))
            .catch(error => res.status(500).json('loi server'));
    }
    showdetails(req, res) {
        const id = req.params.id;
        console.log(id);

    }
}
module.exports = new CollectionController;