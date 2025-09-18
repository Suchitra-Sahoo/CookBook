import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Signup from "./pages/Signup";
import LandingPage from "./pages/LandingPage";
import Signin from "./pages/Signin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>

      {/* Toast container*/}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
