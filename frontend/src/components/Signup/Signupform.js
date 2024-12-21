import React from 'react';
import './Signupform.css';

const Signupform = () => {
  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form>
          {/* Google Sign-In Button */}
          <div className="google-signin">
          <button
            type="button"
            className="google-signin-btn"
            // onClick={handleGoogleSignIn}
          >

            Sign in with Google
          </button>
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        {/* Forgot Password Link */}
        
        <div className="forgot-password">
         <a href="/forgot-password"> 
            Forgot Password?
          </a>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signupform;
