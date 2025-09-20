import React from "react";
import illustration1 from '../../assets/AboutPage/illustration1.png';

function MissionSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gray-50 clip-top-slant">
      {/* Purple Glow Circle */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-200 rounded-full opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        {/* Left Illustration */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src={illustration1}
            alt="Chef preparing delicious recipes"
            className="w-[500px] h-auto object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-700">Mission</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            At <span className="text-purple-600 font-semibold">CookBook</span>, we believe food is more than just a meal — it’s a way to share love, culture, and creativity.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our mission is to build a global community of food lovers who connect, inspire, and learn from each other by sharing recipes and experiences. Whether you’re a beginner or a master chef, CookBook is here to make your cooking journey exciting and memorable.
          </p>
        </div>
      </div>

      {/* Top Slant Style */}
      <style jsx>{`
        .clip-top-slant {
          /* Steeper top slant */
          clip-path: polygon(0 120px, 100% 0, 100% 100%, 0% 100%);
        }
      `}</style>
    </section>
  );
}

export default MissionSection;
