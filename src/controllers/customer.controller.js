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
    const data = req.body;
    try {
        const existingCustomer = await customerService.findCustomer(data);
        if (!existingCustomer) {
            const customer = await customerService.createCustomer(data);
            res.status(201).json({ message: "Customer created successfully." });
        } else {
            if (existingCustomer.type === "First Time") {
                existingCustomer.type = "Return";
                await existingCustomer.save();
            }
            res.json({ message: "Welcome Back!" })
        }
    } catch (error) {
        res.status(400).send(error.message);
    };
};

const updateCustomer = async (req, res) => {
    const id = req.params.id;
    const input = req.body;
    try {
        const existingEmailPhone = await customerService.findCustomer(input);
        if (!existingEmailPhone) {
            const customer = await customerService.updateCustomer(id, input);
            res.json(customer);
        } else {
            res.status(409).json({ message: "Email or Phone Already Exists." });
        }
    } catch (error) {
        res.status(400).send(error.message);
    };
};

const deleteCustomer = async (req, res) => {
    try {
        const customer = await customerService.deleteCustomer(req.params.id);
        if (!customer) {
            return res.json({ message: "No cush customer found." })
        }
        res.json({ message: `${customer.name} deleted successfully.` });
    } catch (error) {
        res.status(400).message(error.message);
    };
};

export default { getAllCustomers, getCustomerById, createCustomer, updateCustomer, deleteCustomer };



