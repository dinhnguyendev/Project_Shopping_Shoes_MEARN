const Product = require('../models/Product');
class DetailsController {
    show(req, res) {
        const slug = req.params.slug;
        Product.findOne({ slug: slug })
            .then(data => res.status(200).json(data))

            .catch(err => res.redirect('http://localhost:3000/error'));
    }
}
module.exports = new DetailsController;