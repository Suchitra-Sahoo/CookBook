const express = require("express");
const multer = require("multer");
const { protect } = require("../middleware/authMiddleware");
const {
  createRecipe,
  getMyRecipes,
  getAllRecipes,
  getSingleRecipe,
} = require("../controllers/recipeController");

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Routes
router.post("/", protect, upload.single("image"), createRecipe);
router.get("/myrecipes", protect, getMyRecipes);
router.get("/", getAllRecipes);
router.get("/:id", getSingleRecipe);

module.exports = router;
