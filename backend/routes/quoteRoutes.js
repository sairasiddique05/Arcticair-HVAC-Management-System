import express from "express";

import {
  createQuote,
  getQuotes,
  updateQuoteStatus,
} from "../controllers/quoteController.js";

const router = express.Router();

router.post("/", createQuote);

router.get("/", getQuotes);

router.put("/:id/status", updateQuoteStatus);

export default router;