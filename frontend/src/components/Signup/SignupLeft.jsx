import React from 'react';
import illustration from '../../assets/signup/illustration.png';

function SignupLeft() {
  return (
    <div className="hidden md:flex w-1/2 h-screen bg-purple-500 items-center justify-center">
      <div className="flex flex-col items-center px-4">
        <img 
          src={illustration} 
          alt="Signup Illustration" 
          className="mb-6 w-[500px] md:w-[600px] lg:w-[500px] h-auto" 
        />
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-2">
          Create Your CookBook Account
        </h1>
        <p className="text-purple-100 text-lg md:text-xl text-center max-w-sm">
          Sign up today and start sharing, discovering, and enjoying amazing recipes!
        </p>
      </div>
    </div>
  );
}

export default SignupLeft;
