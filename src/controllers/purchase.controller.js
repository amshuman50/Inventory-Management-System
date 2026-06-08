import purchaseService from "../services/purchase.service.js";
import productService from "../services/product.service.js";
import mongoose from "mongoose";

const getAllPurchase = async (req, res) => {
    const purchase = await purchaseService.getAllPurchase();
    if (purchase.length === 0) {
        return res.status(404).json({ message: "No Purchase Found." });
    }
    res.json(purchase);
};

const getPurchaseById = async (req, res) => {
    const purchase = await purchaseService.getPurchaseById(req.params.id);
    res.json(purchase);
};

const createPurchase = async (req, res) => {
    const product = req.body.product;
    // const userId = req.user?._id;
    // if (!userId) {
    //     return res.status(401).json({ message: "Unauthorized: user information is missing." });
    // }
    try {
        const createdProduct = await productService.createProduct(product);
        // const purchase = await purchaseService.createPurchase({ ...req.body, product: createdProduct._id, supplier: userId });
        const purchase = await purchaseService.createPurchase({ ...req.body, product: createdProduct._id });
        res.status(201).json({ message: `${createdProduct.name} purchased successfully.` });
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const updatePurchase = async (req, res) => {
    const id = req.params.id;
    const input = req.body;
    try {
        const purchase = await purchaseService.updatePurchase(id, input, { new: true });
        res.json(purchase);
    } catch (error) {
        res.send(400).send(error.message);
    };
};

const deletePurchase = async (req, res) => {
    try {
        const purchase = await purchaseService.deletePurchase(req.params.id);
        res.json(purchase);
    } catch (error) {
        res.send(400).send(error.message);
    };
};

export default { createPurchase, getAllPurchase, getPurchaseById, updatePurchase, deletePurchase };