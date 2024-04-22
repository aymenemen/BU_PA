import Order from "../modals/orders.js";


export const createOrder = async (req, res) => {
    try {
        const { Product, Quantity, OrderId, ExpectedDate, Status } = req.body;
        const order = new Order({ Product, Quantity, OrderId, ExpectedDate, Status });
        const savedOrder = await order.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findById(id);
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedOrder = await Order.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedOrder) return res.status(404).json({ message: 'Order not found' });
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedOrder = await Order.findByIdAndDelete(id);
        if (!deletedOrder) return res.status(404).json({ message: 'Order not found' });
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
