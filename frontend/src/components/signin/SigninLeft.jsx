import React from "react";
import illustration from "../../assets/signin/illustration.png";

function SigninLeft() {
  return (
    <div className="hidden md:flex w-1/2 h-screen bg-purple-500 items-center justify-center">
      <div className="text-center px-6">
        {/* Illustration Image */}
        <img
          src={illustration}
          alt="Signin Illustration"
          className="mb-6 w-[300px] md:w-[400px] lg:w-[450px] mx-auto"
        />

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Welcome Back
        </h1>
        <p className="text-purple-100 text-lg md:text-xl">
          Sign in to continue to your CookBook account and access all features.
        </p>
      </div>
    </div>
  );
}

export default SigninLeft;
