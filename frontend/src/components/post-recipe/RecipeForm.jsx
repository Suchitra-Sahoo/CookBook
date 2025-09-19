import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function RecipeForm({ token, onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");
  const [calories, setCalories] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [category, setCategory] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [ingredientsInput, setIngredientsInput] = useState("");
  const [stepsInput, setStepsInput] = useState("");
  const [steps, setSteps] = useState([]);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // Handle image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Add single step to array
  const addStep = () => {
    const step = stepsInput.trim();
    if (!step) return; // ignore empty input
    setSteps([...steps, step]); // add as one step
    setStepsInput(""); // clear input
  };

  // Remove a step
  const removeStep = (index) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!token) return alert("You must sign in to post a recipe");

    const tags = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t !== "");

    const ingredients = ingredientsInput
      .split(",")
      .map((i) => i.trim())
      .filter((i) => i !== "");

    // ✅ Join steps with \n for backend compatibility
    const stepsString = steps.join("\n");

    onSubmit({
      title,
      description,
      prepTime,
      cookTime,
      servings,
      calories,
      difficulty,
      category,
      cuisine,
      tags,
      ingredients,
      steps: stepsString, // send as string
      image,
    });
  };

  const inputClass =
    "w-full p-3 rounded-lg bg-purple-50 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition";

  const textareaClass =
    "w-full p-3 rounded-lg bg-purple-50 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition";

  return (
    <div className="flex justify-center p-6 mt-14 mb-5">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-8">
        <form onSubmit={handleSubmit}>
          {/* Title & Description */}
          <h2 className="text-2xl font-bold text-purple-800 mb-6">
            Recipe Details
          </h2>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`${inputClass} mb-4`}
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`${textareaClass} mb-4`}
            rows={3}
            required
          />

          {/* Image Upload & Preview */}
          <div className="mb-6">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className={inputClass}
              required
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-3 w-48 h-48 object-cover rounded-lg shadow"
              />
            )}
          </div>

          {/* Prep Time, Cook Time, Servings */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="Preparation Time (e.g., 30 min)"
              value={prepTime}
              onChange={(e) => setPrepTime(e.target.value)}
              className={inputClass}
              required
            />
            <input
              type="text"
              placeholder="Cooking Time (e.g., 45 min)"
              value={cookTime}
              onChange={(e) => setCookTime(e.target.value)}
              className={inputClass}
              required
            />
            <input
              type="number"
              placeholder="Servings"
              value={servings}
              onChange={(e) => setServings(e.target.value)}
              className={inputClass}
              required
            />
          </div>

          {/* Calories & Difficulty */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="number"
              placeholder="Calories"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              className={inputClass}
              required
            />
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className={inputClass}
              required
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          {/* Category & Cuisine */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Category (e.g., Dessert)"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={inputClass}
              required
            />
            <input
              type="text"
              placeholder="Cuisine (e.g., Italian)"
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
              className={inputClass}
              required
            />
          </div>

          {/* Tags */}
          <label className="block font-semibold mt-4 mb-1 text-purple-700">
            Tags (comma separated)
          </label>
          <input
            type="text"
            placeholder="e.g., vegan, dessert, quick"
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
            className={inputClass}
            required
          />

          {/* Ingredients */}
          <label className="block font-semibold mt-4 mb-1 text-purple-700">
            Ingredients (comma separated)
          </label>
          <input
            type="text"
            placeholder="e.g., sugar, salt, butter"
            value={ingredientsInput}
            onChange={(e) => setIngredientsInput(e.target.value)}
            className={inputClass}
            required
          />

          {/* Steps */}
          <label className="block font-semibold mt-4 mb-1 text-purple-700">
            Steps
          </label>
          <div className="flex mb-2">
            <input
              type="text"
              placeholder="Enter a step"
              value={stepsInput}
              onChange={(e) => setStepsInput(e.target.value)}
              className={`${inputClass} mr-2`}
            />
            <button
              type="button"
              onClick={addStep}
              className="bg-purple-700 text-white px-4 rounded-lg transition"
            >
              <FaPlus />
            </button>
          </div>

          {/* Show added steps */}
          <ul className="mb-4">
            {steps.map((step, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-purple-50 p-2 rounded mb-1"
              >
                <span>
                  {index + 1}. {step}
                </span>
                <button
                  type="button"
                  onClick={() => removeStep(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaMinus />
                </button>
              </li>
            ))}
          </ul>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg mt-6 hover:bg-purple-700 transition font-semibold"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default RecipeForm;
