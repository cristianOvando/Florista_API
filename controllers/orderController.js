const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
    try {
        const { flowers, customerName, totalPrice } = req.body;

        if (!flowers || !customerName || !totalPrice) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const order = new Order({
            flowers, 
            customerName,
            totalPrice,
        });

        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getOrders = async (req, res) => {
    const orders = await Order.find().populate('flowers');
    res.json(orders);
};
