const Mongoose = require('mongoose');
require('../models/travlr');

const Model = Mongoose.model('trips');

const tripsList = async (req, res) => {
    const q = await Model
        .find({})
        .exec();

    if (!q || q.length === 0) {
        return res
            .status(404)
            .json({ message: 'No trips found' });
    }

    return res
        .status(200)
        .json(q);
};

const tripsFindByCode = async (req, res) => {
    const q = await Model
        .find({ code: req.params.tripCode })
        .exec();

    if (!q || q.length === 0) {
        return res
            .status(404)
            .json({ message: 'No trip found with that code' });
    }

    return res
        .status(200)
        .json(q);
};

module.exports = {
    tripsList,
    tripsFindByCode
};