import React from "react";
import { useNavigate } from "react-router-dom";

const API_URL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_DEPLOYED_API_URL
    : import.meta.env.VITE_API_URL;

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col">
      {/* Image */}
      {recipe.image && (
        <img
          src={`${API_URL}/${recipe.image}`}
          alt={recipe.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}

      {/* Title & Badges */}
      <div className="flex flex-col gap-2 mb-3">
        <h2 className="text-xl md:text-2xl font-bold text-purple-700">
          {recipe.title}
        </h2>
        <div className="flex flex-wrap gap-2">
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
            {recipe.difficulty || "N/A"}
          </span>
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
            {recipe.cuisine || "N/A"}
          </span>
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
            {recipe.category || "N/A"}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-base mb-3 line-clamp-3">
        {recipe.description}
      </p>

      {/* Tags below description */}
      <div className="flex flex-wrap gap-2 mb-4">
        {recipe.tags?.map((tag, i) => (
          <span
            key={i}
            className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer Info */}
      <div className="flex justify-between items-center mt-auto">
        <div className="text-gray-500 text-sm">
          Posted By: {recipe.user?.name || "Unknown"}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => navigate(`/recipe/${recipe._id}`)}
          className="bg-purple-700 text-white text-sm px-5 py-2 rounded-lg hover:bg-purple-800 transition-colors"
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
