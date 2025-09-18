import React from "react";

const recipes = [
  { title: "Paneer Butter Masala", img: "https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2-500x500.jpg" },
  { title: "Butter Naan", img: "https://foodess.com/wp-content/uploads/2023/02/Butter-Naan-3-500x500.jpg" },
  { title: "Biryani", img: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg" },
  { title: "Chole Bhature", img: "https://cdn.uengage.io/uploads/28289/image-14DG1B-1723180624.jpg" },
  { title: "Dhokla", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZwIS1yE1jjbnzjaT_ZcdO8K_-vUDKB9cTDA&s" },
  { title: "Masala Dosa", img: "https://delishglobe.com/wp-content/uploads/2024/09/Masala-dosa-1.png" },
  { title: "Rasgulla", img: "https://palatesdesire.com/wp-content/uploads/2022/09/rasgulla-recipe@palates-desire.jpg" },
  { title: "Samosa", img: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Indian-Punjabi-Samosa-Recipe-500x500.jpg" },
  { title: "Gulab Jamun", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3aJrkMZfZWaRkqQu36Y9TBzYlCrkKHvy7mw&s" },
  { title: "Rajma Chawal", img: "https://www.kuchpakrahahai.in/wp-content/uploads/2023/05/Rajma-chawal.jpg" },
];

function PopularIndianRecipes() {
  return (
    <section className="p-10 bg-purple-50 overflow-hidden">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-purple-700 mb-8">
       Our Popular Recipes
      </h2>

      <div className="relative">
        {/* Animated Container */}
        <div className="flex animate-marquee space-x-6">
          {recipes.concat(recipes).map((recipe, idx) => (
            <div
              key={idx}
              className="min-w-[250px] sm:min-w-[300px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative"
            >
              <img
                src={recipe.img}
                alt={recipe.title}
                className="w-full h-48 sm:h-56 object-cover rounded-t-2xl"
              />
              <div className="p-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center">
                  {recipe.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind CSS custom animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 30s linear infinite;
          }
        `}
      </style>
    </section>
  );
}

export default PopularIndianRecipes;
