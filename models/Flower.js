const mongoose = require('mongoose');

const flowerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
});

module.exports = mongoose.model('Flower', flowerSchema);
