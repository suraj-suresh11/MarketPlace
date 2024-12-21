import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Forgotpassword.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle the forgot password logic here
    // For example, you can send an API request to reset the password
    console.log(`Password reset link sent to: ${email}`);

    // After submission, navigate to the success page or show a success message
    navigate('/reset-success'); // Example: redirect to a "reset-success" page
  };

  return (
    <div className="forgot-password">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Enter your email address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ForgotPassword;