import API_URL from "../config/api"; 

export const fetchRecipes = async () => {
  try {
    const res = await fetch(`${API_URL}/api/recipes`);
    if (!res.ok) throw new Error("Failed to fetch recipes");
    return await res.json();
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};

export const fetchRecipeById = async (id) => {
  try {
    const res = await fetch(`${API_URL}/api/recipes/${id}`);
    if (!res.ok) throw new Error("Failed to fetch recipe");
    return await res.json();
  } catch (error) {
    console.error("Error fetching recipe:", error);
    throw error;
  }
};
