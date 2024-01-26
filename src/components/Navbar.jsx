import { useState } from "react";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false); // State to handle the menu toggle

  return (
    <nav className={`navbar ${isNavExpanded ? "active" : ""}`}>
      <div className="navbar-section location">
        Based in Houston, TX
      </div>
      {/* Hamburger Icon */}
      <div 
        className="hamburger-menu" 
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {/* Navbar Links */}
      <div className={`navbar-section links ${isNavExpanded ? "active" : ""}`}>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
      </div>
      <div className="navbar-section contact">
        <div className="navbar-circle"></div>
        <span className="status">Open to work</span>
        <a href="mailto:bobby.toth@gmail.com">bobby.toth@gmail.com</a>
      </div>
    </nav>
  );
}

export default Navbar;
