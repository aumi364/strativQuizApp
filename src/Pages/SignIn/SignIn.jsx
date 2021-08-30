import React from "react";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="SignInContainer">
      <form>
        <div className="form-group">
          <label htmlFor="name">Email address</label>
          <input className="form-control" type="email" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input className="form-control" type="password" id="password" />
        </div>
        <div className="text-center">
          <button className="btn cbtn">login</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
