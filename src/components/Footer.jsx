import { Link } from "react-router-dom";
import "./Footer.css";
import {
  IconInstagram,
  IconWhatsApp
} from "./Icons";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        {/* Floating Dark Footer Card */}
        <div className="footer-floating-card">
          <div className="footer-card-inner">
            {/* Brand Left */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo-signature">
                SKV Productions
              </Link>
              <p className="footer-brand-desc">
                Crafting digital experiences that make your brand impossible to ignore. Every pixel has a purpose, every interaction tells a story.
              </p>
            </div>

            {/* Navigation Columns */}
            <div className="footer-columns">
              <div className="footer-col">
                <h4>Services</h4>
                <ul>
                  <li><Link to="/services">Website Design</Link></li>
                  <li><Link to="/services">Landing Pages</Link></li>
                  <li><Link to="/services">E-Commerce</Link></li>
                  <li><Link to="/services">UI/UX Design</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Company</h4>
                <ul>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/work">Our Work</Link></li>
                  <li><Link to="/process">Process</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Contact</h4>
                <ul>
                  <li><a href="tel:+919369104234">+91 93691 04234</a></li>
                  <li><a href="mailto:s.k.v.productions0@gmail.com">s.k.v.productions0@gmail.com</a></li>
                  <li><span>C119/861, Hazaripur, Gorakhpur, UP 273001</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar Outside Card */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © 2026 <span>SKV PRODUCTIONS</span>. ALL RIGHTS RESERVED.
          </p>
          <div className="footer-social-icons">
            <a href="https://www.instagram.com/skvproductions0/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
              <IconInstagram size={18} />
            </a>
            <a href="https://wa.me/919369104234?text=Hi%20SKV%20Productions%2C%20I%20would%20like%20to%20inquire%20about%20your%20services." target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="WhatsApp">
              <IconWhatsApp size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
