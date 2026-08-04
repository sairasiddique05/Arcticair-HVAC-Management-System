import express from "express";
import { getTechnicians, getCustomers } from "../controllers/usercontroller.js";

const router = express.Router();

router.get("/technicians", getTechnicians);
router.get("/customers", getCustomers);

export default router;
