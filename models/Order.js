const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    flowers: [{
        flowerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Flower',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    customerName: {
        type: String,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Order', orderSchema);
