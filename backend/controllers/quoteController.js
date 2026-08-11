import Quote from "../models/Quote.js";

export const createQuote = async (req, res) => {
  try {
    const quote = await Quote.create({
      ...req.body,
      customer: req.user._id,
    });

    res.status(201).json(quote);
  } catch (err) {
    console.log("Create quote error:", err);

    res.status(500).json({
      message: err.message,
    });
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

export const getMyQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find({
      customer: req.user._id,
    })
      .populate("customer", "name email phone")
      .sort({ createdAt: -1 });

    res.json(quotes);

  } catch (error) {
    console.log("Get my quotes error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateQuote = async (req, res) => {
  try {
    const quote = await Quote.findByIdAndUpdate(
      req.params.id,
      {
        amount: req.body.amount,
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