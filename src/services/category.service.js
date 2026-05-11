import Category from "../models/Category.js";

const getAllCategory = async () => {
    const categories = await Category.find();
    return categories;
};

const getCategoryById = async (id) => {
    const category = await Category.findById(id);
    return category;
};

const createCategory = async (data) => {
    return await Category.create(data);
};

const updateCategory = async (id, input) => {
    return await Category.findByIdAndUpdate(id, input,{new:true});
};

const deleteCategory = async (id) => {
    return await Category.findByIdAndDelete(id);
};

export default { getAllCategory, getCategoryById, createCategory, updateCategory, deleteCategory }