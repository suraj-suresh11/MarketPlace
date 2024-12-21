import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Ensure the CSS file is imported

const Header = () => {
  return (
    <header className="header">
      {/* Left Section */}
      <div className="header-left">
        <div className="logo">Marketplace</div>

        {/* Search Bar */}
        <div className="search-bar-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for items..."
          />
          <button className="search-bar-button">
            Search
          </button>
        </div>

        {/* Location Dropdown */}
        <div className="location">
          <select className="location-select">
            <option value="" disabled selected hidden>Location</option> 
            <option value="London">London</option>
            <option value="New York">New York</option>
            <option value="Sydney">Sydney</option>
          </select>
        </div>
      </div>

      {/* Right Section */}
      <div className="header-right">
        <button className="sell-button">Sell</button>
        <Link to="/Signup">
          <button className="sign-up-button">Sign Up</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;