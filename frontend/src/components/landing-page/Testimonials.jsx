import React from 'react';

const testimonials = [
  {
    name: 'Anjali Sharma',
    text: 'CookBook helped me find amazing recipes easily. Love the community!',
    img: 'https://img.freepik.com/free-photo/indian-woman-posing-cute-stylish-outfit-camera-smiling_482257-122351.jpg?semt=ais_incoming&w=740&q=80',
  },
  {
    name: 'Rohit Verma',
    text: 'The recipe suggestions are fantastic! I tried Paneer Butter Masala and it turned out perfect.',
    img: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww',
  },
  {
    name: 'Priya Singh',
    text: 'I enjoy sharing my own creations and getting feedback from others. Super fun!',
    img: 'https://previews.123rf.com/images/michaeljung/michaeljung0812/michaeljung081200629/3957806-beautiful-indian-woman.jpg',
  },
  {
    name: 'Vikram Patel',
    text: 'Engaging and user-friendly platform. The recipe search is very effective.',
    img: 'https://images.pexels.com/photos/2085717/pexels-photo-2085717.jpeg?cs=srgb&dl=pexels-jigar-2085717.jpg&fm=jpg',
  },
  {
    name: 'Neha Kapoor',
    text: 'A perfect platform for sharing and discovering recipes.',
    img: 'https://media.istockphoto.com/id/1987655119/photo/smiling-young-businesswoman-standing-in-the-corridor-of-an-office.jpg?s=612x612&w=0&k=20&c=5N_IVGYsXoyj-H9vEiZUCLqbmmineaemQsKt2NTXGms=',
  },
  {
    name: 'Amit Singh',
    text: 'Loved the recipe suggestions. Makes cooking fun!',
    img: 'https://t3.ftcdn.net/jpg/03/96/78/06/360_F_396780640_mO95sH5ITG2sD3RdOd7fh3olapEkupXW.jpg',
  },
  {
    name: 'Simran Kaur',
    text: 'Finding recipes has never been easier. Great UX!',
    img: 'https://narisakti.com/wp-content/uploads/2023/11/IMG-20231121-WA0009-863x1024.jpg',
  },
  {
    name: 'Rahul Jain',
    text: 'The community is amazing! I got many ideas for my meals.',
    img: 'https://confluencr.com/wp-content/uploads/2024/08/Top-10-Indian-Male-Fashion-Influencers-Creating-Content-In-Hindi.jpg',
  },
  {
    name: 'Sanya Mehta',
    text: 'Beautiful design and easy to navigate. Love it!',
    img: 'https://thumbs.dreamstime.com/b/young-indian-woman-23082467.jpg',
  },
  {
    name: 'Karan Verma',
    text: 'CookBook makes cooking enjoyable and interactive.',
    img: 'https://www.stockvault.net/data/2020/12/13/281611/preview16.jpg',
  },
];

function Testimonials() {
  return (
    <section className="p-10 bg-purple-50 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12
                     bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-700
                     tracking-wide drop-shadow-lg">
        Our Testimonials
      </h2>

      <div className="relative">
        <div className="flex animate-scroll gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md flex-shrink-0 w-64 p-6 flex flex-col items-center text-center"
            >
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-700 text-base md:text-lg mb-4 flex-1">
                "{testimonial.text}"
              </p>
              <h3 className="text-purple-700 text-lg md:text-xl font-bold">
                {testimonial.name}
              </h3>
            </div>
          ))}
          {/* Duplicate testimonials for smooth infinite scroll */}
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx + testimonials.length}
              className="bg-white rounded-2xl shadow-md flex-shrink-0 w-64 p-6 flex flex-col items-center text-center"
            >
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-700 text-base md:text-lg mb-4 flex-1">
                "{testimonial.text}"
              </p>
              <h3 className="text-purple-700 text-lg md:text-xl font-bold">
                {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Testimonials;
