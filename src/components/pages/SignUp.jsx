import React from "react";
import "./signin.css";

const SignUp = () => {
  return (
    <div className="signin-page">
      <div className="signin-card">
        <h2>Create Account</h2>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button className="signin-btn">Create Account</button>

        <p className="signup-link">
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
