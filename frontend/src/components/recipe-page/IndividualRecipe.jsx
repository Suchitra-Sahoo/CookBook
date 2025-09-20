// IndividualRecipe.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import Loader from "../../components/common/Loader/Loader";
import API_URL from "../../config/api"; // adjust path if needed

const IndividualRecipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchRecipe = async () => {
    try {
      const res = await fetch(`${API_URL}/api/recipes/${id}`);
      const data = await res.json();
      setRecipe(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  fetchRecipe();
}, [id]);


  if (loading) return <Loader />;
  if (!recipe)
    return (
      <p className="text-center mt-24 mb-12 text-gray-500 text-lg">
        Recipe not found.
      </p>
    );

  return (
    <>
      <Navbar />

      <div className="max-w-screen-xl mx-auto px-4 md:px-6 mt-24 mb-12 flex flex-col lg:flex-row gap-10">
        {/* Left: Image & Metadata */}
        {recipe.image && (
          <div className="flex-shrink-0 w-full md:w-[400px] lg:w-[510px]">
            <img
              src={`${API_URL}/${recipe.image}`}
              alt={recipe.title}
              className="w-full h-96 object-cover rounded-3xl shadow-xl border border-gray-200"
            />
            <h1 className="text-4xl font-extrabold text-purple-700 mt-5">
              {recipe.title}
            </h1>
            <p className="text-md font-medium text-gray-500 mt-2">
              Posted by: {recipe.user?.name || "Unknown"}
            </p>

            {/* Metadata */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full font-medium shadow-sm">
                Preparation Time: {recipe.prepTime || "-"}
              </span>
              <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full font-medium shadow-sm">
                Cooking Time: {recipe.cookTime || "-"}
              </span>
              <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full font-medium shadow-sm">
                Servings: {recipe.servings || "-"}
              </span>
            </div>

            {/* Tags */}
            {recipe.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {recipe.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full font-medium shadow-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Right: Ingredients & Steps */}
        <div className="flex flex-col gap-6 w-full lg:w-auto">
          {/* Ingredients */}
          {recipe.ingredients?.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-purple-700 mb-2">
                Ingredients
              </h2>

              {recipe.ingredients.length < 11 ? (
                // Single column for less than 11 ingredients
                <ul className="list-disc list-inside text-gray-700">
                  {recipe.ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
              ) : (
                // Two columns for 11 or more ingredients
                <div className="grid grid-cols-2 gap-6 text-gray-700">
                  <ul className="list-disc list-inside">
                    {recipe.ingredients.slice(0, 11).map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </ul>
                  <ul className="list-disc list-inside">
                    {recipe.ingredients.slice(11).map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Steps */}
          {recipe.steps?.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-purple-700 mb-2">Steps</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                {recipe.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default IndividualRecipe;
