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
        <p>Following my military service I graduated with a B.B.A in SCM and embarked on a 4.5 year tenure at Amazon in operations and program management. I've since completed a Full-Stack Software Engineer bootcamp at Code Platoon. This bridged my managerial acumen with technical expertise, broadening my scope to contribute to innovative, tech-centric projects. I'm enthusiastic about integrating this blend of skills to drive efficiency and innovation in future roles, and keen to connect with professionals and organizations at the intersection of management and technology.</p>
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
