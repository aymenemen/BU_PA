import Client from "../modals/Client.js";


export const createClient = async (req, res) => {
    try {
        const { ClientId, Name, adresse, email} = req.body;
        const client = new Client({ ClientId, Name, adresse, email});
        const savedClient = await client.save();
        res.status(201).json(savedClient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getClientById = async (req, res) => {
    try {
        const { id } = req.params;
        const client = await Client.findOne({ ClientId: id });
        if (!client) return res.status(404).json({ message: 'Client not found' });
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const updateClient = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedClient = await Client.findOneAndUpdate({ClientId:id}, req.body, { new: true });
        if (!updatedClient) return res.status(404).json({ message: 'Client not found' });
        res.status(200).json(updatedClient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteClient = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedClient = await Client.findOneAndDelete({ClientId:id});
        if (!deletedClient) return res.status(404).json({ message: 'Client not found' });
        res.status(200).json({ message: 'Client deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
