import categoryService from "../services/category.service.js";

const getAllCategory = async (req, res) => {
    const categories = await categoryService.getAllCategory();
    res.json(categories);
};

const getCategoryById = async (req, res) => {
    const category = await categoryService.getCategoryById(req.params.id);
    res.json(category)
};

const createCategory = async (req, res) => {
    try {
        const category = await categoryService.createCategory(req.body);
        console.log("Hello")
        console.log(category)
        res.json(category);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const updateCategory = async (req, res) => {
    const id = req.params.id;
    const input = req.body;
    try {
        const category = await categoryService.updateCategory(id, input);
        res.json(category);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const deleteCategory = async (req, res) => {
    const id = req.params.id
    try {
        await categoryService.deleteCategory(id);
        res.json({ message: "Category deleted successfully." })
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export default { getAllCategory, getCategoryById, createCategory, updateCategory, deleteCategory }