import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">⚖️</span>
          <span>Gender Responsive</span>
        </Link>
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/')}`} onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/campaigns" className={`nav-link ${isActive('/campaigns')}`} onClick={() => setIsMenuOpen(false)}>
            Campaigns
          </Link>
          <Link to="/resources" className={`nav-link ${isActive('/resources')}`} onClick={() => setIsMenuOpen(false)}>
            Resources
          </Link>
          <Link to="/feedback" className={`nav-link ${isActive('/feedback')}`} onClick={() => setIsMenuOpen(false)}>
            Feedback
          </Link>
        </div>
        <div className="nav-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

