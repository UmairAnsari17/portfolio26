import { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const closeMenu = () => {
        setMenuOpen(false);
    };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY < 80) {
        setShowNavbar(true);
      } else if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
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

        {/* Desktop Menu */}

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

          {/* Mobile Resume Button */}

          <li className="mobile-resume">
            <a
              href="/./resume/Umair Ansari Resume.pdf"
              download
              onClick={closeMenu}
            >
              Download Resume
            </a>
          </li>

        </ul>

        {/* Desktop Resume */}

        <a
          href="/./resume/Umair Ansari Resume.pdf"
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
    </nav>
  );
}

export default Navbar;