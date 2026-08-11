import express from "express";

import {
  createQuote,
  getQuotes,
  getMyQuotes,
  updateQuoteStatus,
} from "../controllers/quoteController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", createQuote);

// Admin - all quotes
router.get("/", getQuotes);

// Logged-in customer - only their quotes
router.get("/my", protect, getMyQuotes);

router.put("/:id/status", updateQuoteStatus);

export default router;