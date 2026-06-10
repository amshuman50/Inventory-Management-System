import Sales from "../models/Sales.js";

const getAllSales = async () => {
    const sales = await Sales.find();
    return sales;
};

const getSalesById = async (id) => {
    const sale = await Sales.findById(id);
    return sales;
};

const createSales = async (data) => {
    const sale = await Sales.create(data);
    return sale;
};

const updateSales = async (data) => {
    const sales = await Sales.findByIdAndUpdate(data);
    return sales;
};

const updateSalesStatus = async (id, status) => {
    return await Sales.findByIdAndUpdate(
        id,
        { status },
        { returnDocument: "after" },
    );
};

const deleteSales = async (data) => {
    const sale = await Sales.findByIdAndDelete(data);
    return sale;
};

export default { getAllSales, getSalesById, createSales, updateSales, deleteSales, updateSalesStatus };