import React, { useState } from 'react';
import './LogIn.css'; // Import the CSS file for styling

const Login = () => {
  // State to hold form values
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can send formData to a server or an API endpoint for authentication
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>rent.All</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Your Password"
              required
            />
          </div>
          <button type="submit" className="form-button">
            Sign In
          </button>
        </form>
        <div className="form-footer">
          <a href="/forgot-password" className="form-link">Forgot Password?</a>
          <span> | </span>
          <a href="/sign-up" className="form-link">Don't have an account? Sign Up</a>
        </div>
      </div>
      <div className="login-welcome">
        <h3>Hey</h3>
        <p>Welcome Back!</p>
        <p>Rent Anything and Everything!</p>
      </div>
    </div>
  );
};

export default Login;
