import React from "react";
import "./Signin.css";

const SignIn = () => {
  return (
    <div className="signin-page">
      <div className="signin-card">
        <h2>Sign In</h2>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button className="signin-btn">Sign In</button>

        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
