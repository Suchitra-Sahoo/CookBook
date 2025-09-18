import React from "react";

const steps = [
  {
    title: "Sign Up & Create Profile",
    desc: "Create your personal account to start exploring recipes.",
  },
  {
    title: "Explore & Search Recipes",
    desc: "Find recipes by ingredients, cuisine, or difficulty.",
  },
  {
    title: "Cook, Comment & Save Favorites",
    desc: "Engage with recipes and save your favorites.",
  },
];

function HowItWorks() {
  return (
    <section className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Left Spotlight */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-64 h-64 bg-purple-900 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Right Spotlight */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-64 h-64 bg-purple-900 opacity-20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Heading */}
      <div className="text-center relative z-10">
        <p className="mt-4 text-sm sm:text-base leading-7 text-gray-500 font-medium">
          STEPS
        </p>
        <h3 className="text-3xl sm:text-4xl md:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
          How it <span className="text-purple-600">Works?</span>
        </h3>
      </div>

      {/* Steps */}
      <div className="mt-16 md:mt-20 relative z-10">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {steps.map((step, idx) => (
            <li
              key={idx}
              className="bg-gray-100 p-6 sm:p-8 pb-12 text-center rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-105"
            >
              <div className="flex flex-col items-center">
                {/* Step Number */}
                <div className="flex-shrink-0 relative top-0 -mt-16">
                  <div className="flex items-center justify-center h-16 sm:h-20 w-16 sm:w-20 rounded-full bg-purple-500 text-white border-4 border-white text-2xl sm:text-3xl font-bold">
                    {idx + 1}
                  </div>
                </div>

                {/* Step Content */}
                <div className="mt-6 sm:mt-8">
                  <h4 className="text-lg sm:text-xl md:text-2xl leading-7 font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-6 sm:leading-7">
                    {step.desc}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HowItWorks;
