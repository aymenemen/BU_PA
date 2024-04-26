import { createOrder, deleteOrder, getOrderById, getOrders, updateOrder } from "../controllers/order.js";
import express from 'express';

const router = express.Router();


router.post('/',createOrder);

router.get('/',getOrders);

router.get('/:id',getOrderById);

router.patch('/:id',updateOrder);

router.delete('/:id',deleteOrder);

export default router;
