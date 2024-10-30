import React from 'react'

function Hero() {
  return (
    <div className="grid-container">
      {/* Title and Subtitle */}
      <div className="hero-title">
        <h1>ROBERT<br/>TOTH</h1>
        <p className="hero-subtitle">Full-Stack<br></br> Software<br></br> Developer</p>
      </div>

      {/* Description and Button */}
      <div className="hero-description" id="about">
        <p>I’m a former Amazon program manager turned full-stack software engineer, blending management expertise with technical skills. I’m driven to leverage this unique skill set to innovate and optimize in tech-driven environments, and I’m eager to connect with professionals at the intersection of management and technology.</p>
        <a href="mailto:bobby.toth@gmail.com">
        <button className="hero-button">LET'S CONNECT</button>
        </a>
      </div>

      {/* Footer Links */}
      <div className="hero-links">
        <div className="link-left">
          <span><a href="https://github.com/Bobbytx" target="_blank" rel="noopener noreferrer">GitHub</a> / <a href="https://www.linkedin.com/in/roberttothpm/" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
        </div>
        <div className="link-right">
          <a href="#experience" className="custom-link">
            <span className="arrow">↓</span>
            <span className="scroll-text">Scroll down</span>
          </a>
        </div>

      </div>
    </div> 
  );
}

export default Hero;
