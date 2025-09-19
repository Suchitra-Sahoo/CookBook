const express = require("express");
const multer = require("multer");
const Recipe = require("../models/Recipe");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// POST recipe (Protected)
router.post("/", protect, upload.single("image"), async (req, res) => {
  try {
    const {
      title,
      description,
      prepTime,
      cookTime,
      servings,
      calories,
      difficulty,
      ingredients,
      steps,
      category,
      cuisine,
      tags,
    } = req.body;

    const newRecipe = new Recipe({
      title,
      description,
      prepTime,
      cookTime,
      servings,
      calories,
      difficulty,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      steps: steps.split("\n"),
      category,
      cuisine,
      tags: tags.split(",").map((t) => t.trim()),
      image: req.file ? req.file.path : null,
      user: req.user._id, // Save logged-in user
    });

    await newRecipe.save();
    res.status(201).json({ message: "Recipe created", recipe: newRecipe });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET recipes of logged-in user (Protected) 
router.get("/myrecipes", protect, async (req, res) => {
  try {
    const recipes = await Recipe.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET all recipes (Public)
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find().populate("user", "name email").sort({ createdAt: -1 });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET single recipe (Public)
router.get("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate("user", "name email");
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
