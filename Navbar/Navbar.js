// export default Navbar;
import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // For Font Awesome icons
import { faSearch, faHeart } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

const navigateTo = (url) => {
  window.location.href = url; // Programmatically navigate
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          {/* Brand logo */}
          <img src="https://img.freepik.com/free-vector/hand-drawn-cartoon-dollar-sign-illustration_23-2150927135.jpg" alt="Logo" />
          <span className='rent'>rent.All</span> {/* Brand name */}
        </div>
        <div className="navbar-links">
          <span onClick={() => navigateTo('/buyer')}>Buyer</span>
          <span onClick={() => navigateTo('/seller')}>Seller</span>
          <span onClick={() => navigateTo('/requests')}>Requests</span>
        </div>
        <div className="navbar-icons">
          {/* Font Awesome search icon */}
          <span onClick={() => navigateTo('/search')}>
            <FontAwesomeIcon icon={faSearch} className="icon" />
          </span>
          {/* Font Awesome heart icon */}
          <span onClick={() => navigateTo('/favorites')}>
            <FontAwesomeIcon icon={faHeart} className="icon heart" />
          </span>
          {/* User profile picture */}
          <span onClick={() => navigateTo('/profile')}>
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/tom-holland-attends-the-los-angeles-premiere-of-sony-news-photo-1683915930.jpg?crop=0.611xw:0.916xh;0.218xw,0.0842xh&resize=640:*"
              alt="Profile"
              className="navbar-profile-pic"
            />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
