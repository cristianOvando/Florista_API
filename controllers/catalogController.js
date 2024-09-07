const Flower = require('../models/Flower');

exports.getFlowers = async (req, res) => {
    const flowers = await Flower.find();
    res.json(flowers);
};

exports.createFlower = async (req, res) => {
    const flower = new Flower(req.body);
    await flower.save();
    res.status(201).json(flower);
};

exports.updateFlower = async (req, res) => {
    try {
        const flower = await Flower.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!flower) {
            return res.status(404).json({ message: 'Flower not found' });
        }
        res.json(flower);
    } catch (error) {
        if (error.name === 'CastError') {
            return res.status(400).json({ message: 'Invalid ID format' });
        }
        res.status(500).json({ message: error.message });
    }
};

exports.deleteFlower = async (req, res) => {
    await Flower.findByIdAndDelete(req.params.id);
    res.status(204).send();
};