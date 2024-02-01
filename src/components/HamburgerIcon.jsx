import React from 'react';
import '../styles/Navbar.css';

function HamburgerIcon({ isOpen }) {
    return (
        <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default HamburgerIcon;
