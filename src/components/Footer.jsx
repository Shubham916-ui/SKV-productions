import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
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
            <p>Crafting digital experiences that make your brand impossible to ignore.</p>
            <div className="footer-socials">
              <a href="#" className="social-pill">Instagram</a>
              <a href="#" className="social-pill">WhatsApp</a>
              <a href="#" className="social-pill">LinkedIn</a>
            </div>
          </div>
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
        <div className="footer-bottom">
          <p>© 2026 <strong>SKV Productions</strong>. All rights reserved.</p>
          <p>Designed & Developed in India</p>
        </div>
      </div>
    </footer>
  );
}
