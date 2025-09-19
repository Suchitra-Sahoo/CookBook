import React from 'react';
import { FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-purple-700 text-white py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        
        {/* Left Column - About */}
        <div className="mb-6 md:mb-0 md:text-left flex-1">
          <h3 className="text-xl font-bold mb-2">CookBook</h3>
          <p className="text-purple-200 text-sm md:text-base">
            Explore thousands of recipes and join a community of food lovers.
          </p>
        </div>

        {/* Middle Column - Quick Links */}
        <div className="mb-6 md:mb-0 text-center flex-1">
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/recipe" className="hover:text-white transition">Recipes</a></li>
            <li><a href="/signup" className="hover:text-white transition">Sign Up</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
          </ul>
        </div>

        {/* Right Column - Social */}
        <div className="md:text-right flex-1">
          <h3 className="text-xl font-bold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-end space-x-4 text-xl text-white">
            <a href="#" className="hover:text-purple-300 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-purple-300 transition"><FaYoutube /></a>
            <a href="#" className="hover:text-purple-300 transition"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 text-center text-purple-200 text-sm">
        &copy; {new Date().getFullYear()} CookBook. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
