import { createOrder, deleteOrder, getOrderById, getOrders, updateOrder } from "../controllers/order";
import express from 'express';

const router = express.Router();


router.post('/',createOrder);

router.get('/',getOrders);

router.get('/:id',getOrderById);

router.put('/:id',updateOrder);

router.delete('/:id',deleteOrder);

export default router;
