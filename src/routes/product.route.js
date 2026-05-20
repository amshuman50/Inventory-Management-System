import express from "express";
import productController from "../controllers/product.controller.js";
import auth from "../middlewares/auth.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import { ROLE_ADMIN, ROLE_PURCHASE_MANAGER, ROLE_SALES_MANAGER } from "../constants/roles.js";

const router = express.Router();

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("/", roleBasedAuth(ROLE_ADMIN, ROLE_PURCHASE_MANAGER), productController.createProduct);
router.put("/:id", roleBasedAuth(ROLE_ADMIN, ROLE_PURCHASE_MANAGER), productController.updateProduct);
router.delete('/:id', roleBasedAuth(ROLE_ADMIN, ROLE_PURCHASE_MANAGER), productController.deleteProduct);

export default router;