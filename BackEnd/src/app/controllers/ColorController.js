const Color = require('../models/Color');
class ColorController {
    all(req, res) {
        Color.find({})
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json('loi server'))
    }
}
module.exports = new ColorController;