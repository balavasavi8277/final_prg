import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Gender Responsive Mechanism</h3>
          <p>Promoting gender equality and responsive mechanisms across all sectors.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/campaigns">Campaigns</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/feedback">Feedback</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@genderresponsive.org</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="LinkedIn">💼</a>
            <a href="#" aria-label="Instagram">📷</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Gender Responsive Mechanism. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

