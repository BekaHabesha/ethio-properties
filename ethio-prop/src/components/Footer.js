import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer" data-section-theme="dark">
    <div className="container">
      <div className="row">
        <div className="col-1-2">
          <img src="images/logo_with_name2.png" alt="Techium logo" width="160" height="40" />
          <address className="footer-address">
            Kera St<br />
            Addis Ababa, CA<br />
          </address>
        </div>
        <div className="col-1-2">
          <ul className="social nav">
            <li className="social-item nav-item"><a href="https://www.facebook.com/bereketdere/" className="social-link">Facebook</a></li>
            <li className="social-item nav-item"><a href="https://twitter.com/bereketdmy" className="social-link">Twitter</a></li>
            <li className="social-item nav-item"><a href="https://www.instagram.com/fifa_football_agent_bereket/" className="social-link">Instagram</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-1-2">
          <p className="footer-copyright">© 2024 Ethio Properties, made with BEREKET DEREJE by student of ALX and Holberton School.</p>
        </div>
        <div className="col-1-2">
          <ul className="footer-nav nav">
            <li className="footer-nav-item nav-item"><a href="#" className="footer-nav-link">Terms of use</a></li>
            <li className="footer-nav-item nav-item"><a href="#" className="footer-nav-link">Privacy Policy</a></li>
            <li className="footer-nav-item nav-item"><a href="#" className="footer-nav-link">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
