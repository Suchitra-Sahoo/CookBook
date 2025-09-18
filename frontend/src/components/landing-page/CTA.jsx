import React from 'react';
import { FaUtensils } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function CTA() {
  return (
    <section className="relative p-8 md:p-10 text-center my-10 mx-4 md:mx-20 rounded-xl overflow-hidden bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 shadow-lg">
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-white drop-shadow-lg flex justify-center items-center gap-3">
        <FaUtensils className="hidden md:inline" />
        Start Cooking Today!
      </h2>

      <p className="text-base md:text-lg lg:text-xl mb-6 text-white/90 px-2 md:px-0">
        Join 1,000+ food lovers and explore thousands of recipes curated just for you.
      </p>

      <Link to="/signup">
        <button className="relative bg-white text-purple-600 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition transform hover:shadow-2xl">
          Sign Up Now
          <span className="absolute -right-2 -top-2 md:-right-3 md:-top-3 bg-yellow-400 w-3 h-3 md:w-4 md:h-4 rounded-full animate-ping"></span>
        </button>
      </Link>
    </section>
  );
}

export default CTA;
