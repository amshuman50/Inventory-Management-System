import supplierController from "../controllers/supplier.controller.js";
import express from "express";

const router = express.Router();

router.get("/", supplierController.getAllSupliers);
router.get("/:id", supplierController.getSupplierById);
router.post("/", supplierController.createSupplier);
router.put("/", supplierController.updateSupplier);
router.delete("/:id", supplierController.deleteSupplier);

export default router;