import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-purple-50 to-purple-100 overflow-hidden mt-16">
      {/* Decorative purple circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="max-w-screen-xl mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-4 drop-shadow-md">
            Discover, Share & Cook{" "}
            <span className="text-purple-900">Delicious Recipes!</span>
          </h1>
          <p className="text-lg text-purple-800 mb-6">
            Join our community of food lovers and explore thousands of
            mouth-watering recipes.
          </p>
          <Link to="/recipe">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-purple-700 transform hover:scale-105 transition duration-300">
              Browse Recipes
            </button>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src="https://images.squarespace-cdn.com/content/v1/612d4825ee7c3b7ba3e215b7/1667458982443-N6XGU1PU7335QEMVUP7M/Delicious+food.png"
            alt="Cooking"
            className="w-full max-w-md rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
