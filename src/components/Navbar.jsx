import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/process", label: "Process" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <span className="logo-skv">SKV</span>
            <span className="logo-prod">Productions</span>
          </Link>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link to="/contact" className="nav-cta" onClick={closeMenu}>
            Start a Project
          </Link>

          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-overlay${menuOpen ? " open" : ""}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  "mobile-link" + (isActive ? " active" : "")
                }
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="btn-primary mobile-cta" onClick={closeMenu}>
          Start a Project →
        </Link>
      </div>
    </>
  );
}
