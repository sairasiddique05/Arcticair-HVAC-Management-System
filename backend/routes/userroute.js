import express from "express";
import { getTechnicians } from "../controllers/userController.js";

const router = express.Router();

router.get("/technicians", getTechnicians);

export default router;
