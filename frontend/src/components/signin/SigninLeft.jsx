import React from "react";

function SigninLeft() {
  return (
    <div className="hidden md:flex w-1/2 h-screen bg-purple-500 items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Welcome Back!
        </h1>
        <p className="text-purple-100 text-lg md:text-xl">
          Sign in to continue to your account and access all features.
        </p>
      </div>
    </div>
  );
}

export default SigninLeft;
