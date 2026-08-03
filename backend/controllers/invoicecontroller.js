import Invoice from "../models/invoice.js";

// Create Invoice
export const createInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.create(req.body);

    res.status(201).json(invoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Invoices
export const getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find()
      .populate("customer", "name email")
      .populate("request", "serviceType");

    res.json(invoices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Single Invoice
export const getInvoiceById = async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id)
      .populate("customer", "name email phone")
      .populate("request");

    if (!invoice) {
      return res.status(404).json({
        message: "Invoice not found",
      });
    }

    res.json(invoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mark Invoice Paid
export const markInvoicePaid = async (req, res) => {
  try {
    const invoice = await Invoice.findByIdAndUpdate(
      req.params.id,
      {
        status: "Paid",
      },
      { new: true }
    );

    res.json(invoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};