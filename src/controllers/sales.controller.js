import salesService from "../services/sales.service.js";
import customerService from "../services/customer.service.js"
import productService from "../services/product.service.js";

const getAllSales = async (req, res) => {
    const sales = await salesService.getAllSales();
    res.json(sales);
};

const getSalesById = async (req, res) => {
    const sale = await salesService.getSalesById(req.params.id);
    res.json(sale);
};

// const createSales = async (req, res) => {
//     const customer = req.body.customer;
//     try {
//         const existingCustomer = await customerService.findCustomer(customer);
//         if (!existingCustomer) {
//             const createCustomer = await customerService.createCustomer(customer);
//         } else {
//             res.json({ message: "Email or Phone already exists." })
//         }
//         const sale = await salesService.createSales({ ...req.body, customer: createCustomer._id });
//         await Promise.all(
//             req.body.sales.map(item =>
//                 productService.decreaseStock(item.product)
//             )
//         );
//         res.json({ message: "Product sold successfully." });
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// };

const createSales = async (req, res) => {
    const customer = req.body.customer;
    try {
        const existingCustomer = await customerService.findCustomer(customer);
        let customerId;
        if (!existingCustomer) {
            const createdCustomer =
                await customerService.createCustomer(customer);
            customerId = createdCustomer._id;
        } else {
            customerId = existingCustomer._id;
        }
        await Promise.all(
            req.body.sales.map(item =>
                productService.decreaseStock(item.product)
            )
        );
        await salesService.createSales({
            ...req.body,
            customer: customerId
        });
        res.status(201).json({
            message: "Product sold successfully."
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const updateSales = async (req, res) => {
    const customer = req.body.customer;
    try {
        const updatedCustomer = await customerService.updateCustomer(customer);
        const sale = await salesService.updateSales({ ...req.body, customer: updatedCustomer._id });
        res.json({ message: "Sales updated successfully." });
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const updateSalesStatus = async (req, res) => {
    if (!req.body?.status) {
        return res.status(400).json({ message: "Status is required." });
    }
    try {
        const sales = await salesService.updateSalesStatus(req.params.id, req.body.status,);
        res.json({ message: "Sales Status updated successfully." })
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const deleteSales = async (req, res) => {
    const id = req.params.id;
    try {
        const sale = await salesService.deleteSales(id);
        if (!sale) {
            return res.json({ message: "No such sale available." });
        }
        res.status(200).json({ message: "Sales deleted successfully." });
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export default { getAllSales, getSalesById, createSales, updateSales, updateSalesStatus, deleteSales }