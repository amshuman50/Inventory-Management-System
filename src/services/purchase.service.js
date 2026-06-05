import Purchase from "../models/Purchase.js";

const getAllPurchase = async () => {
    const purchase = await Purchase.find().populate("supplier");
    return purchase;
};

const getPurchaseById = async (id) => {
    const purchase = await Purchase.findById(id);
    return purchase;
};

const createPurchase = async (data) => {
    const purchase = await Purchase.create(data);
    return purchase;
};

const updatePurchase = async (data) => {
    const purchase = await Purchase.findByIdAndUpdate(id);
    return purchase;
};

const deletePurchase = async (id) => {
    const purchase = await Purchase.findByIdAndDelete(id);
    return purchase;
};

export default { getAllPurchase, getPurchaseById, createPurchase, updatePurchase, deletePurchase };