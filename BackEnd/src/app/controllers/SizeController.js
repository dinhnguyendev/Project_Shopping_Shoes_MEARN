const Size = require('../models/Size');
class SizeController {
    all(req, res) {
        Size.find({})
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json('loi server'))
    }
}
module.exports = new SizeController;