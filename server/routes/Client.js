import express from 'express';
import { createClient, deleteClient, getClientById, getClients, updateClient } from '../controllers/Client.js';


const router= express.Router();

router.get('/',getClients);

router.get('/:id',getClientById);

router.post('/',createClient);

router.patch('/:id',updateClient);

router.delete('/:id',deleteClient);

export default router;
