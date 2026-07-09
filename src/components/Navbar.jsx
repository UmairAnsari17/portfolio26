import { useState, useEffect } from "react";
import "./Navbar.css";

import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun
} from "react-icons/fa";

function Navbar() {

  /* ================= Theme ================= */

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  /* ================= Mobile Menu ================= */

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* ================= Navbar Hide/Show ================= */

  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY < 80) {
        setShowNavbar(true);
      } else if (window.scrollY > lastScrollY) {
        // Scrolling Down
        setShowNavbar(false);
      } else {
        // Scrolling Up
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar-custom ${showNavbar ? "show" : "hide"}`}>
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <span className="square"></span>
          <h4>UA.</h4>
        </div>
        {/* Navigation */}
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#hero" onClick={closeMenu}>Home</a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>Projects</a>
          </li>
          <li>
            <a href="#experience" onClick={closeMenu}>Experience</a>
          </li>
          <li>
            <a href="#qualification" onClick={closeMenu}>Qualification</a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>About</a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>

          {/* Mobile Resume */}

          <li className="mobile-resume">
            <a
              href="/./resume/Umair_Ansari_Resume_2026.pdf"
              download
              onClick={closeMenu}
            >
              Download Resume
            </a>
          </li>
        </ul>

        {/* Right Side */}

        <div className="nav-right">

          {/* Theme Toggle */}

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          {/* Desktop Resume */}

          <a
            href="/./resume/Umair_Ansari_Resume_2026.pdf"
            download
            className="resume-btn"
          >
            Resume
          </a>

          {/* Hamburger */}

          <div
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;