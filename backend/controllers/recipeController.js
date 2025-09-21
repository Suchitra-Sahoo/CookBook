// controllers/recipeController.js
const Recipe = require("../models/Recipe");
const cloudinary = require("../config/cloudinary");

// POST recipe (Protected)
const createRecipe = async (req, res) => {
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

    let imageUrl = null;
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      imageUrl = result.secure_url; // public URL
    }

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
      image: imageUrl,
      user: req.user._id,
    });

    await newRecipe.save();
    res.status(201).json({ message: "Recipe created", recipe: newRecipe });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET recipes of logged-in user (Protected)
const getMyRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET all recipes (Public)
const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET single recipe by ID (Public)
const getSingleRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate(
      "user",
      "name email"
    );
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createRecipe,
  getMyRecipes,
  getAllRecipes,
  getSingleRecipe,
};
