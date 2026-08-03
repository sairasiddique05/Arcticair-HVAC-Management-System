import User from "../models/User.js";

export const getTechnicians = async (req, res) => {
  try {
    const technicians = await User.find({ role: "technician" }).select("-password");

    res.status(200).json(technicians);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCustomers = async (req, res) => {
  try {
    const customers = await User.find({ role: "customer" }).select("-password");

    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};