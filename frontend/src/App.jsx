import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Signup from "./pages/Signup";
import LandingPage from "./pages/LandingPage";
import Signin from "./pages/Signin";
import RecipePage from "./pages/RecipePage";
import IndividualRecipe from "./components/recipe-page/IndividualRecipe";
import PostRecipe from "./pages/PostRecipe";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/recipe" element={<RecipePage />} />
        <Route path="/recipe/:id" element={<IndividualRecipe />} />
        <Route path="/post-recipe" element={<PostRecipe />} />
      </Routes>

      {/* Toast container*/}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
