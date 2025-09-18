import React from "react";

function InputField({ icon: Icon, type, placeholder, value, onChange }) {
  return (
    <div className="relative">
      {/* Icon */}
      <Icon className="absolute top-3 md:top-4 left-3 md:left-4 text-purple-500" />
      
      {/* Input */}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pl-10 md:pl-12 pr-4 py-2.5 md:py-3 rounded-xl border border-purple-300 
          focus:ring-2 focus:ring-purple-400 outline-none text-gray-700 shadow-sm 
          text-sm md:text-base bg-purple-50 hover:bg-purple-100"
      />
    </div>
  );
}

export default InputField;
