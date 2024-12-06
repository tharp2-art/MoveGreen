import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>MoveGreen</h3>
          <p>Nachhaltige Mobilität für eine bessere Zukunft</p>
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/karte">Karte</Link></li>
            <li><Link to="/explorer">Explorer</Link></li>
            <li><Link to="/community">Community</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Ressourcen</h4>
          <ul>
            <li><Link to="/about">Über uns</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Kontakt</h4>
          <ul>
            <li><i className="fas fa-envelope"></i> info@movegreen.de</li>
            <li><i className="fas fa-phone"></i> +49 123 456789</li>
            <li><i className="fas fa-map-marker-alt"></i> Berlin, Deutschland</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MoveGreen. Alle Rechte vorbehalten.</p>
        <div className="legal-links">
          <Link to="/privacy">Datenschutz</Link>
          <Link to="/terms">AGB</Link>
          <Link to="/imprint">Impressum</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
