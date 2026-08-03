import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import technicianRoutes from "./routes/technicianRoutes.js";
import serviceRequestRoutes from "./routes/serviceRequestRoutes.js";
import userRoutes from "./routes/userroute.js";

dotenv.config();

// Connect Database
connectDB();


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/technicians", technicianRoutes);
app.use("/api/requests", serviceRequestRoutes);
app.use("/api/users", userRoutes);


// Test Route
app.get("/", (req, res) => {
  res.send("🚀 ArcticAir Backend is Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});