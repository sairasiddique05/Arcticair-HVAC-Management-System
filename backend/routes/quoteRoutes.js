import express from "express";

import {
  createQuote,
  getQuotes,
  getMyQuotes,
  updateQuote,
} from "../controllers/quoteController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createQuote);

// Admin - all quotes
router.get("/", getQuotes);

// Customer - own quotes only
router.get("/my", protect, getMyQuotes);

// Edit quote / amount
router.put("/:id", updateQuote);

// Approve / Reject
router.put("/:id/status", updateQuote);

export default router;