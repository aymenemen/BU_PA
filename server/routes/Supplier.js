import express from "express";
import { createSupplier, deleteSupplier, getSupplierById, getSuppliers, updateSupplier } from "../controllers/supplier.js";

const router = express.Router();

router.get('/',getSuppliers);

router.get('/',getSupplierById);

router.post('/',createSupplier);

router.put('/:id',updateSupplier);

router.delete('/:id',deleteSupplier);


export default router;
