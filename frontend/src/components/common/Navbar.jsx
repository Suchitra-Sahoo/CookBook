import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Map menu items to routes
  const routeMap = {
    Home: "/",
    Recipes: "/recipe", 
    About: "/about",
    Contact: "/contact",
    PostRecipe: "/post-recipe"
  };

  const menuItems = Object.keys(routeMap);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center space-x-2 cursor-pointer transform hover:scale-105 transition-transform duration-300"
          onClick={() => navigate("/")}
        >
          <img src="/logo.png" alt="CookBook Logo" className="h-8 sm:h-10" />
          <span className="text-2xl font-bold text-purple-600">CookBook</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8 font-medium">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                onClick={() => navigate(routeMap[item])}
                className="relative text-gray-700 hover:text-purple-600 transition-colors duration-300 cursor-pointer"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Join Now Button + Hamburger */}
        <div className="flex items-center space-x-2 lg:space-x-0">
          <button
            onClick={() => navigate("/signup")}
            className="px-5 py-2 rounded-lg text-white font-semibold bg-purple-500 hover:scale-105 transform transition-all duration-300 shadow-md"
          >
            Join Now
          </button>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-200 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-4 py-2 space-y-2 font-medium bg-white/90 backdrop-blur-md shadow-lg">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                onClick={() => {
                  navigate(routeMap[item]);
                  setIsMenuOpen(false);
                }}
                className="block py-2 px-3 rounded hover:bg-purple-50 hover:text-purple-600 transition-colors cursor-pointer"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
