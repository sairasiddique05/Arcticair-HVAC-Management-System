import express from "express";
import {
  createInvoice,
  getAllInvoices,
  getInvoiceById,
  markInvoicePaid,
} from "../controllers/invoicecontroller.js";

const router = express.Router();

router.post("/", createInvoice);

router.get("/", getAllInvoices);

router.get("/:id", getInvoiceById);

router.put("/:id/pay", markInvoicePaid);

export default router;