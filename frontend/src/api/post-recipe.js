import API_URL from "../config/api"; 

export const postRecipe = async (recipeData) => {
  const token = localStorage.getItem("token");

  if (!token) throw new Error("You must be signed in to post a recipe");

  const formData = new FormData();
  formData.append("title", recipeData.title);
  formData.append("description", recipeData.description);
  formData.append("prepTime", recipeData.prepTime);
  formData.append("cookTime", recipeData.cookTime);
  formData.append("servings", recipeData.servings);
  formData.append("calories", recipeData.calories || "");
  formData.append("difficulty", recipeData.difficulty);
  formData.append("ingredients", recipeData.ingredients);
  formData.append("steps", recipeData.steps);
  formData.append("category", recipeData.category || "");
  formData.append("cuisine", recipeData.cuisine || "");
  formData.append("tags", recipeData.tags || "");
  if (recipeData.image) formData.append("image", recipeData.image);

  const response = await fetch(`${API_URL}/api/recipes`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to post recipe");
  }

  return response.json();
};
