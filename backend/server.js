import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authroutes.js";
import technicianRoutes from "./routes/technicianRoutes.js";
import serviceRequestRoutes from "./routes/serviceRequestRoutes.js";
import userRoutes from "./routes/userroute.js";
import invoiceRoutes from "./routes/invoiceroute.js";
import quoteRoutes from "./routes/quoteRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";

dotenv.config();

// Connect Database
connectDB();



const app = express();

// Middleware
// Middleware
app.use(
  cors({
    origin: [
      "https://arcticair-hvac-management-system-flax.vercel.app",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.options("*", cors());

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/technicians", technicianRoutes);
app.use("/api/requests", serviceRequestRoutes);
app.use("/api/users", userRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/api/quotes", quoteRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/reports", reportRoutes);


// Test Route
app.get("/", (req, res) => {
  res.send("🚀 ArcticAir Backend is Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});