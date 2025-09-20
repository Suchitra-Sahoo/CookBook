import React from "react";
import { FaUtensils } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="pt-20 pb-8 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-700">
          Welcome to{" "}
          <span className="bg-clip-text text-transparent bg-purple-500">
            CookBook
          </span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
          Discover, share, and enjoy recipes from around the world. At{" "}
          <span className="font-semibold text-purple-600">CookBook</span>, we
          bring together passionate food lovers to celebrate flavors,
          traditions, and creativity in the kitchen.
        </p>
        <a
          href="/recipe"
          className="inline-flex items-center gap-2 px-7 py-3 bg-purple-600 text-white text-lg font-medium rounded-xl shadow-lg hover:shadow-2xl hover:bg-purple-700 transition-transform transform hover:scale-105"
        >
          <FaUtensils /> Explore Recipes
        </a>
      </div>

      {/* Right Illustration */}
      <div className="flex-1 flex justify-center relative">
        {/* Glowing gradient circle behind image */}
        <div className="absolute w-72 h-72 rounded-full "></div>

        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/father-teaching-how-to-cook-to-their-children-illustration-svg-download-png-9165526.png"
          alt="Father teaching children to cook"
          className="relative w-95 5h-95 object-contain "
        />
      </div>
    </section>
  );
}

export default HeroSection;
