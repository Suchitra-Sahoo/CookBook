require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

// Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => res.send("Backend running"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
