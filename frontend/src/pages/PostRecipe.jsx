import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import RecipeForm from "../components/post-recipe/RecipeForm";
import { postRecipe } from "../api/post-recipe";

function PostRecipe() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate("/signup"); // redirect if no token
    }
  }, [token, navigate]);

  const handleRecipeSubmit = async (data) => {
    setLoading(true);
    try {
      await postRecipe(data);
      toast.success("Recipe posted successfully!");
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to post recipe");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[60vh] bg-gray-50 flex flex-col items-center justify-center p-6">
        {token && <RecipeForm token={token} onSubmit={handleRecipeSubmit} loading={loading} />}
      </div>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </>
  );
}

export default PostRecipe;
