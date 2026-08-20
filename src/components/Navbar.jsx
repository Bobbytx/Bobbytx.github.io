import { useEffect, useRef, useState } from "react";
import "../styles/Navbar.css";
import HamburgerIcon from "./HamburgerIcon";

const navItems = [["About", "#about"], ["What I Do", "#what-i-do"], ["Projects", "#projects"], ["Contact", "mailto:bobby.toth@gmail.com"]];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => { if (navRef.current && !navRef.current.contains(event.target)) setIsOpen(false); };
    const handleEscape = (event) => { if (event.key === "Escape") setIsOpen(false); };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => { document.removeEventListener("mousedown", handleClickOutside); document.removeEventListener("keydown", handleEscape); };
  }, []);

  return (
    <header className="site-header"><nav className="navbar" ref={navRef} aria-label="Main navigation">
      <a className="location" href="#about" aria-label="Robert Toth, home">TEXAS <span>— USA</span></a>
      <ul className={`nav-links ${isOpen ? "open" : ""}`} id="main-menu">{navItems.map(([label, href]) => <li key={label}><a href={href} onClick={() => setIsOpen(false)}>{label}</a></li>)}</ul>
      <div className="work-status"><span className="navbar-circle" aria-hidden="true" /><span className="status">DESIGNING + BUILDING DIGITAL PRODUCTS</span></div>
      <button className="hamburger" type="button" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-controls="main-menu" aria-label={isOpen ? "Close menu" : "Open menu"}><HamburgerIcon isOpen={isOpen} /></button>
    </nav></header>
  );
}

export default Navbar;
