import registrationRequestsService from "../services/registrationRequests.service.js";

const getAllRegistrationRequests = async (req, res) => {
    const rr = await registrationRequestsService.getAllRegistrationRequests();
    if (!rr || rr.length === 0) {
        res.json({ message: "No Registration Requests available" });
    }
    res.json(rr);
};

const getRegistrationRequestsById = async (req, res) => {
    const rr = await registrationRequestsService.getRegistrationRequestsById(req.params.id);
    if (!rr || rr.length === 0) {
        res.json({ message: "No Such Request Found." });
    }
    res.json(rr);
};

const createRegistrationRequests = async (req, res) => {
    const data = req.body;
    try {
        const rr = await registrationRequestsService.createRegistrationRequests(data);
        res.json({ message: "Registration Request Created." })
    } catch (error) {
        res.status(error.status || 500).send(error);
    }
};

const updateRegistrationRequests = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const rr = await registrationRequestsService.updateRegistrationRequests(id, data);
        res.json({ message: "Registration Request Updated." })
    } catch (error) {
        res.status(error.status).send(error);
    }
};

const updateRegistrationRequestsStatus = async (req, res) => {
    const id = req.params.id;
    const status = req.body.status;
    try {
        const rr = await registrationRequestsService.updateRegistrationRequestsStatus(id, status);
        if (!rr) {
            return res.json({ message: "No Such Requests Found." })
        }
        if (status === "UNDERREVIEW") {
            res.json({ message: "Request satatus changed to under Review.." });
        } else if (status === "Rejected") {
            res.json({ message: "Request Rejected." })
        } else {
            res.json({ message: "Request Status updated successfully." })
        }
    } catch (error) {
        res.status(error.status).send(error);
    }
};

const deleteRegistrationRequests = async (req, res) => {
    const id = req.params.id;
    try {
        const rr = await registrationRequestsService.deleteRegistrationRequests(id);
        if (!rr) {
            res.json({ message: "No such requests found" });
        } else {
            res.json({ message: "Requests Deleted." })
        }
    } catch (error) {
        res.status(error.status).send(error);
    }
};

const approveRegistrationRequest = async (req, res) => {
    const id = req.params.id;
    try {
        const rr = await registrationRequestsService.approveRegistrationRequest(id);
        if (!rr) {
            res.status(404).json({ message: "Registration Request not found." });
        } else {
            res.json({ message: "Registration Request Approved." })
        }
    } catch (error) {
        res.status(error.status || 500).send(error.message);
    }
};

export default { getAllRegistrationRequests, getRegistrationRequestsById, createRegistrationRequests, updateRegistrationRequests, deleteRegistrationRequests, updateRegistrationRequestsStatus, approveRegistrationRequest }
