import React from "react";

const features = [
  {
    title: "Search Recipes",
    desc: "Find recipes by ingredients, cuisine, or difficulty.",
    img: "https://media.istockphoto.com/id/1288965421/vector/open-recipe-book-with-fresh-vegetables-vector-illustration-in-paper-art-style-cooking-book.jpg?s=612x612&w=0&k=20&c=vZ0KKRpjJVJsWnv-e-5BnDvcNFoQa_E8IEKpXl2jQeQ=",
  },
  {
    title: "Add Recipes",
    desc: "Share your own creations with the community.",
    img: "https://cdn.prod.website-files.com/63bb7fe09d70bb7dc8e86719/63c4e43459c35a2889466e8d_776-x-528-Add.webp",
  },
  {
    title: "Engage",
    desc: "Like, comment, and save your favorite recipes.",
    img: "https://www.centralbank.net/globalassets/images/articles/lc-businesses-beat-facebook-algorithm.jpg?v=1D759567D010F80",
  },
];

function Features() {
  return (
    <section className="p-6 sm:p-8 md:p-10 bg-purple-50">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12
                     bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-700
                     tracking-wide drop-shadow-lg">
        Discover Our Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-8 lg:gap-10">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col
                       mx-auto w-full max-w-sm md:max-w-md h-[400px]"
          >
            {/* Responsive Image */}
            <div className="w-full h-64 overflow-hidden rounded-t-2xl">
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text content */}
            <div className="p-4 flex-1 flex flex-col justify-center text-center">
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-3 text-purple-700">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-base sm:text-sm md:text-lg">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
