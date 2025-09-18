import React from 'react';
import SignupLeft from '../components/Signup/SignupLeft';
import SignupForm from '../components/Signup/SignupForm';

function Signup() {
  return (
    <div className="flex">
      <SignupLeft />
      <SignupForm />
    </div>
  );
}

export default Signup;
