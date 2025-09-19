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

  // Dropdown state for Difficulty
  const [isDifficultyOpen, setIsDifficultyOpen] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const addStep = () => {
    const step = stepsInput.trim();
    if (!step) return;
    setSteps([...steps, step]);
    setStepsInput("");
  };

  const removeStep = (index) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!token) return alert("You must sign in to post a recipe");

    const tags = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    const ingredients = ingredientsInput
      .split(",")
      .map((i) => i.trim())
      .filter(Boolean);
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
      steps: stepsString,
      image,
    });
  };

  const inputClass =
    "w-full p-3 rounded-lg bg-purple-50 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition";

  const textareaClass =
    "w-full p-3 rounded-lg bg-purple-50 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition";

  const difficulties = ["Easy", "Medium", "Hard"];

  return (
    <div className="flex justify-center p-4 sm:p-6 mt-14 mb-5">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-6 sm:p-8">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center sm:text-left">
           Upload Your Recipe Details
          </h2>

          {/* Title & Description */}
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Recipe Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={inputClass}
              required
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={textareaClass}
              rows={3}
              required
            />
          </div>

          {/* Image Upload */}
          <div className="mb-6 mt-4 flex flex-col sm:flex-row sm:items-center gap-4">
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
                className="w-full sm:w-48 h-48 object-cover rounded-lg shadow"
              />
            )}
          </div>

          {/* Prep Time, Cook Time, Servings */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="Preparation Time"
              value={prepTime}
              onChange={(e) => setPrepTime(e.target.value)}
              className={inputClass}
              required
            />
            <input
              type="text"
              placeholder="Cooking Time"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="number"
              placeholder="Calories"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              className={inputClass}
              required
            />

            {/* Mobile-friendly Dropdown for Difficulty */}
            <div className="relative cursor-pointer">
              <div
                onClick={() => setIsDifficultyOpen(!isDifficultyOpen)}
                className="flex items-center justify-between space-x-5 bg-purple-50 px-4 py-3 rounded-lg border border-purple-300"
              >
                <span className="text-gray-500 font-semibold">{difficulty}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`h-6 w-6 text-gray-500 transform transition-transform ${
                    isDifficultyOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>

              {isDifficultyOpen && (
                <div className="absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl">
                  {difficulties.map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => {
                        setDifficulty(level);
                        setIsDifficultyOpen(false); // close after selecting
                      }}
                      className="text-left my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black"
                    >
                      {level}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Category & Cuisine */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
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
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Enter a step"
              value={stepsInput}
              onChange={(e) => setStepsInput(e.target.value)}
              className={`${inputClass} pr-12`}
            />
            <button
              type="button"
              onClick={addStep}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-white bg-purple-700 hover:bg-purple-800 rounded-md p-2 transition"
            >
              <FaPlus />
            </button>
          </div>

          {/* Display Steps */}
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
                  className="text-red-500 hover:text-red-700 transition"
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
