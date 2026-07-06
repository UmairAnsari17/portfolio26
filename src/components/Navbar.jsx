import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar-custom">
      <div className="container">

        <div className="logo">
          <span className="square"></span>
          <h4>UA.</h4>
        </div>

        <ul className="nav-menu">
          <li><a href="#hero">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#qualification">Qualification</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="#" className="resume-btn">
          Resume
        </a>

      </div>
    </nav>
  );
}

export default Navbar;