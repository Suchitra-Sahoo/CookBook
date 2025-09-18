import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const faqs = [
  {
    question: "How do I search for recipes?",
    answer:
      "You can search for recipes using the search bar at the top. Filter by ingredients, cuisine, or difficulty level to find exactly what you want.",
  },
  {
    question: "Can I add my own recipes?",
    answer:
      "Yes! Click on the 'Add Recipe' button after signing in. Fill in the details, upload an image, and share your creation with the community.",
  },
  {
    question: "How can I save my favorite recipes?",
    answer:
      "While browsing recipes, click on the 'Save' button to add recipes to your personal collection for easy access later.",
  },
  {
    question: "Is CookBook free to use?",
    answer:
      "Absolutely! All the features, including searching, adding, and saving recipes, are completely free.",
  },
  {
    question: "Do I need an account to use CookBook?",
    answer:
      "You can browse recipes without an account, but signing up allows you to save favorites, add recipes, and engage with the community.",
  },
  {
    question: "Can I edit or delete my recipes?",
    answer:
      "Yes! Go to your profile, select the recipe, and you will see options to edit or delete it anytime.",
  },
  {
    question: "How do I report inappropriate content?",
    answer:
      "Click the 'Report' button on any recipe or comment, and our team will review it promptly.",
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <section className="py-16 px-4 md:px-6 bg-purple-50">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-purple-800">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left focus:outline-none"
            >
              <span className="text-lg md:text-xl font-medium text-purple-700">
                {faq.question}
              </span>
              <span
                className={`text-purple-700 text-2xl transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? "max-h-80 py-3" : "max-h-0"
              }`}
            >
              <p className="px-5 text-base md:text-lg text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}

        {/* Bottom text */}
        <div className="text-center mt-8 text-lg md:text-xl text-gray-700">
          Have more questions?{" "}
          <span
            onClick={handleContact}
            className="text-purple-700 font-semibold cursor-pointer hover:underline"
          >
            Contact us
          </span>
        </div>
      </div>
    </section>
  );
}

export default Faq;
