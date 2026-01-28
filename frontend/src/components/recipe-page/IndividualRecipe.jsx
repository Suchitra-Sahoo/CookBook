import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import Loader from "../../components/common/Loader/Loader";
import API_URL from "../../config/api";

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const IndividualRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [posting, setPosting] = useState(false);

  // Fetch recipe
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

  // Fetch comments
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`${API_URL}/api/comments/${id}`);
        const data = await res.json();
        setComments(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchComments();
  }, [id]);

  // Post comment
  const handlePostComment = async () => {
    if (!commentText.trim()) return;

    try {
      setPosting(true);
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_URL}/api/comments/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content: commentText }),
      });

      const newComment = await res.json();
      setComments((prev) => [...prev, newComment]);
      setCommentText("");
    } catch (err) {
      console.error(err);
    } finally {
      setPosting(false);
    }
  };

  if (loading) return <Loader />;

  if (!recipe)
    return <p className="text-center mt-24 text-gray-500">Recipe not found.</p>;

  return (
    <>
      <Navbar />

      <div className="max-w-screen-xl mx-auto px-4 md:px-6 mt-24 mb-20">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT */}
          <div className="flex-shrink-0 w-full md:w-[400px] lg:w-[500px]">
            <img
              src={
                recipe.image?.startsWith("http")
                  ? recipe.image
                  : `${API_URL}/${recipe.image}`
              }
              alt={recipe.title}
              className="w-full h-96 object-cover rounded-3xl shadow-lg"
            />

            <h1 className="text-4xl font-bold text-purple-700 mt-5">
              {recipe.title}
            </h1>

            <p className="text-gray-500 mt-1">
              Posted by {recipe.user?.name || "Unknown"}
            </p>

            <div className="flex gap-3 mt-4 flex-wrap text-sm">
              <span className="bg-purple-50 px-3 py-1 rounded-full">
                Prep: {recipe.prepTime || "-"}
              </span>
              <span className="bg-purple-50 px-3 py-1 rounded-full">
                Cook: {recipe.cookTime || "-"}
              </span>
              <span className="bg-purple-50 px-3 py-1 rounded-full">
                Servings: {recipe.servings || "-"}
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-8 w-full">
            {/* INGREDIENTS */}
            <div>
              <h2 className="text-2xl font-semibold text-purple-700 mb-3">
                Ingredients
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            </div>

            {/* STEPS */}
            <div>
              <h2 className="text-2xl font-semibold text-purple-700 mb-3">
                Steps
              </h2>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                {recipe.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* ===== COMMENTS ===== */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-purple-700 mb-6">
            Comments
          </h2>

          {/* Comment box */}
          {localStorage.getItem("token") ? (
            <div className="mb-10">
              <div
                className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm
                focus-within:ring-2 focus-within:ring-purple-400 transition"
              >
                <textarea
                  rows="3"
                  className="w-full resize-none text-sm outline-none placeholder-gray-400"
                  placeholder="Write your thoughts about this recipe…"
                  value={commentText}
                  maxLength={300}
                  onChange={(e) => setCommentText(e.target.value)}
                />

                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-gray-400">
                    {commentText.length}/300
                  </span>

                  <button
                    onClick={handlePostComment}
                    disabled={posting || !commentText.trim()}
                    className="px-5 py-1.5 bg-purple-600 text-white rounded-full text-sm font-medium
                      hover:bg-purple-700 transition
                      disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {posting ? "Posting…" : "Post"}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-sm mb-6">
              Please{" "}
              <span
                className="text-purple-600 cursor-pointer underline"
                onClick={() => navigate("/login")}
              >
                login
              </span>{" "}
              to comment.
            </p>
          )}

          {/* Comments list */}
          <div className="space-y-5">
            {comments.length === 0 ? (
              <p className="text-gray-400 text-sm">No comments yet.</p>
            ) : (
              comments.map((c) => (
                <div key={c._id} className="flex gap-3">
                  {/* Avatar */}
                  <div className="w-9 h-9 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-semibold">
                    {c.user?.name?.charAt(0).toUpperCase() || "U"}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-800">
                        {c.user?.name || "User"}
                      </p>
                      <p className="text-xs text-gray-400">
                        {formatDate(c.createdAt)}
                      </p>
                    </div>

                    <p className="text-sm text-gray-700 mt-1">{c.content}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default IndividualRecipe;
