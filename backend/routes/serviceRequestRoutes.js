import express from "express";
import {
  createRequest,
  getAllRequests,
   assignTechnician,
      getSingleRequest,
   getTechnicianRequests,
   startJob,
   submitServiceReport,
   submitReport,
   uploadPhotos,
   getCustomerRequests,
   getAllReports,
   getReportById,
} from "../controllers/servicerequestController.js";

const router = express.Router();

router.post("/", createRequest);
router.get("/", getAllRequests);
router.put("/:id/assign", assignTechnician);
router.get("/:id", getSingleRequest);
router.get("/technician/:id", getTechnicianRequests);
router.put("/:id/start", startJob);
// router.put("/:id/report", submitServiceReport);
router.put("/:id/report", submitReport);
router.put("/:id/photos", uploadPhotos);
router.get("/customer/:customerId", getCustomerRequests);
router.get("/reports", getAllReports);
router.get("/reports/:id", getReportById);


export default router;