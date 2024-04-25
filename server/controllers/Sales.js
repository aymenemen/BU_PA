import Sales from "../modals/Sales.js";

export const createSale = async (req, res) => {
    try {
        const { SaleId, ClientId, ProductID, Date, price,quantity } = req.body;
        const sale = new Sales({ SaleId, ClientId, ProductID, Date, price,quantity });
        const savedSale = await sale.save();
        res.status(201).json(savedSale);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getSaless = async (req, res) => {
    try {
        const sales = await Sales.find();
        res.status(200).json(sales);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getSalesById = async (req, res) => {
    try {
        const { id } = req.params;
        const sale = await Sales.findById(id);
        if (!sale) return res.status(404).json({ message: 'Sales not found' });
        res.status(200).json(sale);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateSale = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedSale = await Sales.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedSale) return res.status(404).json({ message: 'Sales not found' });
        res.status(200).json(updatedSale);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteSale = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSale = await Sales.findByIdAndDelete(id);
        if (!deletedSale) return res.status(404).json({ message: 'Sales not found' });
        res.status(200).json({ message: 'Sales deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
