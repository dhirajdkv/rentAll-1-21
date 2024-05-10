// In src/App.js or src/components/SignUpForm.js
import React, { useState } from 'react';
import './SignUp.css'; // Import the CSS file

const SignUpForm = () => {
  // State to hold the form values
  const [formData, setFormData] = useState({
    fullName: '',
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
    // You can send formData to a server or an API endpoint
  };

  return (
    <div className="SUform-container">
      <div className="SUform-box">
        <h2 className="SUform-title">rent.All</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="SUform-input"
              placeholder="Full Name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="SUform-input"
              placeholder="Email Address"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              className="SUform-input"
              placeholder="Password"
              required
            />
          </div>
          <div>
            <input
              type="Confirm password"
              name="confirm password"
              id="confirmpassword"
              value={formData.password}
              onChange={handleInputChange}
              className="SUform-input"
              placeholder="Confirm Password"
              required
            />
          </div>
          <button
            type="submit"
            className="SUform-button"
          >
            Sign Up
          </button>
        </form>
        <div className='m'>
          Already a member?{" "}
          <a href="/sign-in" className="SUform-link">
            Sign In
          </a>
        </div>
      </div>
      <div className="SignUP-welcome">
        <h3>Hello</h3>
        <p>Welcome to </p>
        <p>Rent Anything and Everything!</p>
      </div>
    </div>
  );
};

export default SignUpForm;