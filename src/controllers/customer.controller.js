import customerService from "../services/customer.service.js";

const getAllCustomers = async (req, res) => {
    const customer = await customerService.getAllCustomers();
    res.json(customer);
};

const getCustomerById = async (req, res) => {
    const customer = await customerService.getCustomerById(req.params.id);
    res.json(customer);
};

const createCustomer = async (req, res) => {
    try {
        const customer = await customerService.createCustomer(req.body);
        res.status(201).json({ message: "Customer created successfully." })
    } catch (error) {
        res.status(400).send(error.message);
    };
};

const updateCustomer = async (req, res) => {
    const id = req.params.id;
    const input = req.body;
    try {
        const customer = await customerService.updateCustomer(id, input);
        res.json(customer);
    } catch (error) {
        res.status(400).send(error.message);
    };
};

const deleteCustomer = async (req, res) => {
    try {
        const customer = await customerService.deleteCustomer(req.params.id);
        res.json(customer);
    } catch (error) {
        res.status(400).message(error.message);
    };
};

export default { getAllCustomers, getCustomerById, createCustomer, updateCustomer, deleteCustomer };



