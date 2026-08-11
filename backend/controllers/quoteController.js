import Quote from "../models/Quote.js";

export const createQuote = async (req, res) => {
  try {
    const quote = await Quote.create(req.body);
    res.status(201).json(quote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find()
      .populate("customer");

    res.json(quotes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateQuoteStatus = async (req, res) => {
  try {
    const quote = await Quote.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      { new: true }
    );

    res.json(quote);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};