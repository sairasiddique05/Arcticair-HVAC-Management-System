import express from "express";
import {
  createTechnician,
  getTechnicians,
  updateTechnician,
  deleteTechnician,
} from "../controllers/technicianController.js";

const router = express.Router();

router.post("/", createTechnician);
router.get("/", getTechnicians);
router.put("/:id", updateTechnician);
router.delete("/:id", deleteTechnician);

export default router;