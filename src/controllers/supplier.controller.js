import supplierService from "../services/supplier.service.js";

const getAllSupliers = async (req, res) => {
    const suppliers = await supplierService.getAllSupliers();
    res.json(suppliers);
};

const getSupplierById = async (req, res) => {
    const supplier = await supplierService.getSupplierById(req.params.id);
    res.json(supplier);
};

const createSupplier = async (req, res) => {
    try {
        const supplier = await supplierService.createSupplier(req.body);
        res.status(201).json(supplier);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const updateSupplier = async (req, res) => {
    const id = req.params.id;
    const input = req.body;
    try {
        const supplier = await supplierService.updateSupplier(id, input)
        res.json(supplier);
    }catch(error){
        res.status(400).send(error.message);
    }
};

const deleteSupplier=async(req,res)=>{
    const id=req.params.id;
    try{
        const deletedSupplier=await supplierService.deleteSupplier(id);
        res.json(deletedSupplier)
    }catch(error){
        res.status(400).send(error.message);
    }
};

export default{getAllSupliers,getSupplierById,createSupplier,updateSupplier,deleteSupplier}