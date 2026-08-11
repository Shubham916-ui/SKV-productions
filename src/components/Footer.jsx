import { Link } from "react-router-dom";
import "./Footer.css";
import {
  IconGitHub,
  IconLinkedIn,
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
              <Link to="/" className="footer-logo">
                <span className="logo-brand-mark">SKV</span>
                <span className="logo-v-divider" />
                <div className="logo-text-block">
                  <span className="logo-title">SKV PRODUCTIONS</span>
                  <span className="logo-tagline">
                    BUILDING THE FUTURE
                  </span>
                </div>
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
                  <li><a href="tel:+919876543210">+91 98765 43210</a></li>
                  <li><a href="mailto:hello@skvproductions.in">hello@skvproductions.in</a></li>
                  <li><span>India — Worldwide</span></li>
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
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
              <IconGitHub size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
              <IconLinkedIn size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
              <IconInstagram size={18} />
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="WhatsApp">
              <IconWhatsApp size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
