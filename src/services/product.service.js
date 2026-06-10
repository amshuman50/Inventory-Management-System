import Product from "../models/Product.js";

const getAllProducts = async () => {
    const products = await Product.find()
        .populate("categoryId", "name")
        .populate("supplier", "name");
    return products;
};

const getProductById = async (id) => {
    const product = await Product.findById(id);
    return product;
};

const createProduct = async (data) => {
    const product = await Product.create(data);
    return product;
};

const updateProduct = async (id, input) => {
    return await Product.findByIdAndUpdate(id, input, { new: true });
};

const deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id);
};

const decreaseStock = async (productId) => {
    const product = await Product.findOneAndUpdate(
        {
            _id: productId,
            stock: { $gt: 0 }
        },
        {
            $inc: { stock: -1 }
        },
        {
            new: true
        }
    );
    if (!product) {
        throw new Error("Product not found or out of stock.");
    }
    return product;
};

export default { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct, decreaseStock }