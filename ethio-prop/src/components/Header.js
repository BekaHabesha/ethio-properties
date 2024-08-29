import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header" data-section-theme="dark">
    <div className="container">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">
            <img src="images/ET33c.png" alt="Ethio-Properties logo" width="170" height="90" />
          </Link>
        </div>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <nav className="navbar-menu">
          <ul className="nav">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/contact-us" className="nav-link">Contact Us</Link></li>
            <li className="nav-item"><Link to="/services" className="nav-link">Services</Link></li>
            <li className="nav-item"><Link to="/about-us" className="nav-link">About Us</Link></li>
            <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
            <li className="nav-item"><Link to="/signin" className="nav-link">Signin</Link></li>
            <li className="nav-item">
              <form action="#" method="post" className="form-search">
                <input type="search" name="q" id="search-input" placeholder="Search..." aria-label="Search through site content" />
                <button className="search-button">
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="search-icon">
                    <title>Search icon</title>
                    <path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z" />
                  </svg>
                </button>
              </form>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
