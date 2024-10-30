import React, { useState, useEffect, useRef } from 'react';
import '../styles/Navbar.css';
import HamburgerIcon from './HamburgerIcon';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
      const handleClickOutside = (e) => {
          if (navRef.current && !navRef.current.contains(event.target)) {
              setIsOpen(false);
          }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
          document.removeEventListener('mousedown', handleClickOutside);
      };
  }, [navRef], [setIsOpen]);

    return (
        <nav className="navbar" ref={navRef}>
            <div className="location">Houston, TX</div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="mailto:bobby.toth@gmail.com">Contact</a></li>
            </ul>
            <div className="work-status">
              <div className="navbar-circle"></div>
              <div className="status">Open to work</div>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <HamburgerIcon isOpen={isOpen} />
            </div>
        </nav>
    );
}

export default Navbar;