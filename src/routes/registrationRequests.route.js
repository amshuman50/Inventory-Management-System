import registrationRequestsController from "../controllers/registrationRequests.controller.js";
import express from "express";

const router = express.Router();

router.get("/", registrationRequestsController.getAllRegistrationRequests);
router.get("/:id", registrationRequestsController.getRegistrationRequestsById);
router.post("/", registrationRequestsController.createRegistrationRequests);
router.put("/:id", registrationRequestsController.updateRegistrationRequests);
router.delete("/:id", registrationRequestsController.deleteRegistrationRequests);
router.patch("/:id", registrationRequestsController.updateRegistrationRequestsStatus);
router.post("/approve/:id", registrationRequestsController.approveRegistrationRequest);

export default router;