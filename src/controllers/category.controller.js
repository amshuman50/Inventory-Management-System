import categoryService from "../services/category.service.js";

const getAllCategory = async (req, res) => {
    const categories = await categoryService.getAllCategory();
    if (!categories || categories.length == 0) {
        res.status(400).json({ message: "No Category Available." });
    }
    res.json(categories);
};

const getCategoryById = async (req, res) => {
    const category = await categoryService.getCategoryById(req.params.id);
    if (!category) {
        res.status(404).json({ message: "No such category found." });
    }
    res.json(category)
};

const createCategory = async (req, res) => {
    try {
        const category = await categoryService.createCategory(req.body);
        res.status(201).json(category);
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
        const deletedCategory = await categoryService.deleteCategory(id);
        if (!deletedCategory) {
            res.status(404).json({ message: "No such Category found." })
        }
        res.json({ message: `${deletedCategory.name} deleted successfully.` })
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export default { getAllCategory, getCategoryById, createCategory, updateCategory, deleteCategory }