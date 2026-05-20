import Supplier from "../models/Supplier.js";

const getAllSupliers = async () => {
    const suppliers = await Supplier.find();
    return suppliers;
};

const getSupplierById = async (id) => {
    const supplier = await Supplier.findById(id);
    return supplier;
};

const createSupplier = async (data) => {
    const createdSupplier = await Supplier.create(data);
    return createdSupplier;
};

const updateSupplier = async (id, input) => {
    const updatedSupplier = await Supplier.findByIdAndUpdate(id, input);
    return updatedSupplier;
};

const deleteSupplier = async (id) => {
    const deletedSupplier = await Supplier.findByIdAndDelete(id);
    return deleteSupplier;
}

export default { getAllSupliers, getSupplierById, createSupplier, updateSupplier, deleteSupplier };