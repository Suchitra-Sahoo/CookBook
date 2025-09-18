require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

// Import auth routes
const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes); // <- Add this line to use auth routes

// Test route
app.get("/", (req, res) => res.send("Backend running"));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
