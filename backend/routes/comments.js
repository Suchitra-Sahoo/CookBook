const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");
const { protect } = require("../middleware/authMiddleware"); // JWT middleware

// GET all comments for a recipe
router.get("/:recipeId", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.recipeId).populate(
      "comments.user",
      "name",
    );
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });

    res.json(recipe.comments);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// POST a new comment
router.post("/:recipeId", protect, async (req, res) => {
  const { content } = req.body;
  if (!content)
    return res.status(400).json({ message: "Comment cannot be empty" });

  try {
    const recipe = await Recipe.findById(req.params.recipeId);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });

    const comment = { user: req.user._id, content };
    recipe.comments.push(comment);
    await recipe.save();

    const newComment = await Recipe.populate(
      recipe.comments[recipe.comments.length - 1],
      { path: "user", select: "name" },
    );

    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
