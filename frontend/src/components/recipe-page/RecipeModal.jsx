import React from "react";

const RecipeModal = ({ recipe, isOpen, onClose }) => {
  if (!isOpen || !recipe) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blurred background */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div className="relative bg-white rounded-xl shadow-xl max-w-3xl w-full p-6 overflow-y-auto max-h-[90vh] z-10">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
          onClick={onClose}
        >
          ×
        </button>

        {/* Recipe Image */}
        {recipe.image && (
          <img
            src={`${import.meta.env.VITE_API_URL}/${recipe.image}`}
            alt={recipe.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
        )}

        {/* Title */}
        <h2 className="text-2xl font-bold text-purple-700 mb-2">{recipe.title}</h2>

        {/* Author */}
        <p className="text-gray-600 mb-4">
          Posted By: {recipe.user?.name || "Unknown"}
        </p>

        {/* Description */}
        <p className="text-gray-700 mb-4">{recipe.description}</p>

        {/* Details */}
        <div className="grid grid-cols-2 gap-4 mb-4 text-gray-700">
          <p><span className="font-semibold">Prep Time:</span> {recipe.prepTime}</p>
          <p><span className="font-semibold">Cook Time:</span> {recipe.cookTime}</p>
          <p><span className="font-semibold">Servings:</span> {recipe.servings}</p>
          <p><span className="font-semibold">Calories:</span> {recipe.calories}</p>
          <p><span className="font-semibold">Difficulty:</span> {recipe.difficulty}</p>
          <p><span className="font-semibold">Cuisine:</span> {recipe.cuisine}</p>
          <p><span className="font-semibold">Category:</span> {recipe.category}</p>
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2">Ingredients:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {recipe.ingredients?.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </div>

        {/* Steps */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2">Steps:</h3>
          <ol className="list-decimal list-inside text-gray-700">
            {recipe.steps?.map((step, i) => (
              <li key={i} className="mb-1">{step}</li>
            ))}
          </ol>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {recipe.tags?.map((tag, i) => (
            <span
              key={i}
              className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
