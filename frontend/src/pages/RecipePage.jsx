import React, { useEffect, useState } from "react";
import Loader from "../components/common/Loader/Loader";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import RecipeCard from "../components/recipe-page/RecipeCard";
import { fetchRecipes } from "../api/recipes";

const RecipePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    const loadRecipes = async () => {
      try {
        const data = await fetchRecipes();
        if (!ignore) {
          setRecipes(Array.isArray(data) ? data : data.recipes || []);
        }
      } catch (err) {
        console.error(err);
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    loadRecipes();

    return () => {
      ignore = true;
    };
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-4 mt-20 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe._id || recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RecipePage;
