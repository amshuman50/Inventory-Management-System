import Customer from "../models/Customer.js";

const getAllCustomers = async () => {
    const customers = await Customer.find();
    return customers;
};

const getCustomerById = async (id) => {
    const customer = await Customer.findById(id);
    return customer;
};

const createCustomer = async (data) => {
    const customer = await Customer.create(data);
    return customer;
};

const updateCustomer = (id, input) => {
    const customer = await Customer.findByIdAndUpdate(id, input);
    return customer;
};

const deleteCustomer = (id) => {
    const customer = await Customer.findByIdAndDelete(id);
    return customer;
};

export default { getAllCustomers, getCustomerById, createCustomer, updateCustomer, deleteCustomer };


