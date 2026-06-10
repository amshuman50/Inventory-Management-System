import salesController from "../controllers/sales.controller.js";
import express from "express"

const router = express.Router();

router.get("/", salesController.getAllSales);
router.get("/:id", salesController.getSalesById);
router.post("/", salesController.createSales);
router.put("/:id", salesController.updateSales);
router.patch("/:id", salesController.updateSalesStatus);
router.delete("/:id", salesController.deleteSales);

export default router;