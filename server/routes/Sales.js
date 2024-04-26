import express from 'express';
import { createSale, deleteSale, getSalesById, getSaless, updateSale } from '../controllers/Sales.js';

const router= express.Router();

router.get('/',getSaless);

router.get('/:id',getSalesById);

router.post('/',createSale);

router.patch('/:id',updateSale);

router.delete('/:id',deleteSale);

export default router;
