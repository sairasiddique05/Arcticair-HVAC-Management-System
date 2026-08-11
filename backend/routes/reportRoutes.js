import express from "express";
import { getMonthlyReports } from "../controllers/reportController.js";

const router = express.Router();

router.get("/monthly", getMonthlyReports);

export default router;