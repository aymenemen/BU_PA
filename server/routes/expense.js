import express from 'express';
import { createExpense, deleteExpense, getExpense, getExpenseById, updateExpense } from '../controllers/expense.js';

const router= express.Router();

router.get('/',getExpense);

router.get('/:id',getExpenseById);

router.post('/',createExpense);

router.put('/:id',updateExpense);

router.delete('/:id',deleteExpense);

export default router;
