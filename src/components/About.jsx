function Hero() {
  return (
    <div className="grid-container">
      {/* Title and Subtitle */}
      <div className="hero-title">
        <h1>ROBERT<br/>TOTH</h1>
        <p className="hero-subtitle">Full-Stack<br></br> Software<br></br> Developer</p>
      </div>

      {/* Description and Button */}
      <div className="hero-description">
        <p>I’m advancing my skills in a Full-Stack Software Engineer bootcamp at Code Platoon! Delving into a comprehensive curriculum covering JavaScript, Python, HTML, CSS, React, and more, while also exploring foundational computer science concepts like algorithms, data structures, and Object-Oriented Programming (OOP).</p>
        <button className="hero-button">LET'S CONNECT</button>
      </div>

      {/* Footer Links */}
      <div className="hero-links">
        <div className="link-left">
          <span>GitHub / LinkedIn</span>
        </div>
        <div className="link-right">
          <span>Scroll down</span>
        </div>
      </div>
    </div> 
  );
}

export default Hero;
