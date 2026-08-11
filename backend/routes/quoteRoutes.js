import express from "express";

import {
  createQuote,
  getQuotes,
  updateQuote,
} from "../controllers/quoteController.js";

const router = express.Router();

router.post("/", createQuote);

router.get("/", getQuotes);

router.put("/:id", updateQuote);

export default router;