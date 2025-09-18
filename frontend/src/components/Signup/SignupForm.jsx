import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash, FaArrowLeft } from "react-icons/fa";
import InputField from "./InputField";

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Dummy signup logic
    setTimeout(() => {
      console.log({ name, email, password });
      setLoading(false);
      alert("Signed up successfully!");
    }, 1000);
  };

  return (
    <div className="md:w-1/2 w-full flex flex-col md:justify-center bg-white p-8 md:p-12 text-lg">
      {/* Back to Home */}
      <div className="flex justify-end mb-6 hover:underline text-xl font-semibold">
        <a href="/" className="flex items-center gap-2 text-purple-500">
          <FaArrowLeft /> Back to Home
        </a>
      </div>

      {/* Sign Up heading */}
      <div className="mb-8 flex items-center">
        <h3 className="text-2xl md:text-3xl font-bold text-purple-600 mr-4">
          Sign Up
        </h3>
        <div className="flex-grow h-1 bg-purple-200"></div>
      </div>

      {/* Form */}
      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
        {/* Name */}
        <InputField
          icon={FaUser}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Email */}
        <InputField
          icon={FaEnvelope}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password with toggle */}
        <div className="relative">
          <InputField
            icon={FaLock}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 text-xl cursor-pointer transition-transform duration-200"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>

        {/* Error message */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-purple-400 to-purple-600 text-white py-2.5 md:py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>

      {/* Divider + Signin link */}
      <div className="my-4 md:my-6 flex items-center justify-center">
        <span className="h-px flex-1 bg-purple-200"></span>
        <span className="px-2 md:px-3 text-gray-500 text-sm md:text-base">or</span>
        <span className="h-px flex-1 bg-purple-200"></span>
      </div>
      <p className="text-center text-gray-600 text-sm md:text-base">
        Already have an account?{" "}
        <a href="/signin" className="text-purple-600 font-semibold hover:underline">
          Sign In
        </a>
      </p>
    </div>
  );
}

export default SignupForm;
