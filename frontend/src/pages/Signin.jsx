import React from "react";
import SigninLeft from "../components/signin/SigninLeft";
import SigninForm from "../components/signin/SigninForm";

function Signin() {
  return (
    <div className="flex">
      <SigninLeft />
      <SigninForm />
    </div>
  );
}

export default Signin;
