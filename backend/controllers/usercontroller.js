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