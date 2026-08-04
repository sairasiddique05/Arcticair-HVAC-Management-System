import User from "../models/user.js";
import bcrypt from "bcryptjs";


// Create Technician

export const createTechnician = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

   
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Technician already exists",
      });
    }

    // password
    const hashedPassword = await bcrypt.hash(password, 10);

   
    const technician = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
      role: "technician",
    });

    res.status(201).json({
      success: true,
      message: "Technician created successfully",
      technician,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Get All Technicians

export const getTechnicians = async (req, res) => {
  try {
    const technicians = await User.find({
      role: "technician",
    });

    res.status(200).json({
      success: true,
      technicians,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Update Technician

export const updateTechnician = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    const technician = await User.findByIdAndUpdate(
      id,
      {
        name,
        email,
        phone,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Technician Updated Successfully",
      technician,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Delete Technician

export const deleteTechnician = async (req, res) => {
  try {
    const { id } = req.params;

    const technician = await User.findByIdAndDelete(id);

    if (!technician) {
      return res.status(404).json({
        success: false,
        message: "Technician not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Technician deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};