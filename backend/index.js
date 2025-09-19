require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/auth");
const recipeRoutes = require("./routes/recipeRoutes");

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

// Serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipeRoutes);

app.get("/", (req, res) => res.send("Backend running"));

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
