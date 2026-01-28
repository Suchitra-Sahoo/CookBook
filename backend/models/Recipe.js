const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  prepTime: String,
  cookTime: String,
  servings: Number,
  calories: Number,
  difficulty: { type: String, enum: ["Easy", "Medium", "Hard"] },
  ingredients: [String],
  steps: [String],
  category: String,
  cuisine: String,
  tags: [String],
  image: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
  createdAt: { type: Date, default: Date.now },
  comments: [commentSchema]
});

module.exports = mongoose.model("Recipe", recipeSchema);
