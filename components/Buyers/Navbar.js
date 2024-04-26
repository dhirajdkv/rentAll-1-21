// src/components/NavBar.js
import React from 'react';
import { FaUser, FaHeart, FaSearch } from 'react-icons/fa';
import './Buyers.css'; 


const NavBar = () => {
  return (
    <div>
      <nav style={{ padding: '0px', backgroundColor: '	#ffffff', display: 'flex', justifyContent: 'space-between' }}>
      <div  style={{ display: 'flex', alignItems: 'center' }}>
        <h2 style={{ marginleft:'200px' }}>rent.All</h2>
        <ul style={{ listStyle: 'none', display: 'flex', marginLeft: '450px', gap: '20px', fontSize:17, fontWeight:'bold' }}>
          <li><a href="/buyer" style={{ textDecoration: 'none', color: 'black' }}>Buyer</a></li>
          <li><a href="/seller" style={{ textDecoration: 'none', color: 'black' }}>Seller</a></li>
          <li><a href="/requests" style={{ textDecoration: 'none', color: 'black' }}>Requests</a></li>
        </ul>
      </div>
      <div class="container content" style={{display: 'flex', alignItems: 'center', marginRight:'30px',gap:'50px'}}>
        <input type="text" placeholder="Search..." style={{ padding: '5px',  borderRadius: '5px' }} />
        <FaSearch size={24} /> {/* Search icon */}
      <FaHeart size={24} /> {/* Favorites (heart) icon */}
      <FaUser size={24} /> {/* Profile icon */}
      </div>
      {/* <div style={{gap:'5px'}}>
      
    </div> */}
    </nav>
    </div>
  );
};

export default NavBar;
