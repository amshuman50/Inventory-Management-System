import purchaseController from "../controllers/purchase.controller.js";
import express from "express";

const router = express.Router();

router.get("/", purchaseController.getAllPurchase);
router.get("/:id", purchaseController.getPurchaseById);
router.post("/", purchaseController.createPurchase);
router.put("/:id", purchaseController.updatePurchase);
router.delete("/:id", purchaseController.deletePurchase);

export default router;