import './App.css'
import React from 'react'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero/About Section */}
        <div className="grid-container">
          <div className="hero-title">
            <h1>ROBERT<br/>TOTH</h1>
            <p className="hero-subtitle">Full-Stack<br></br> Software<br></br> Developer</p>
          </div>

          <div className="hero-description" id="about">
            <p>I'm a former Amazon program manager turned full-stack software engineer, blending management expertise with technical skills. I'm driven to leverage this unique skill set to innovate and optimize in tech-driven environments, and I'm eager to connect with professionals at the intersection of management and technology.</p>
            <a href="mailto:bobby.toth@gmail.com">
              <button className="hero-button">LET'S CONNECT</button>
            </a>
          </div>

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

        {/* Icebreakers Section */}
        <div className="grid-container">
          <div className="icebreakers-title" id="icebreakers">
            <h2>&lt; Icebreakers /&gt;</h2>
          </div>
          <div className="icebreakers-content">
            <p>
              I'm a big sports fan! I love following my local teams and attending sports events. I'm always looking for new restaurants to try out around the city. I try to travel as much as possible to explore new areas especially scenic environments (work with me so I can fund this). <a href="mailto:bobby.toth@gmail.com">GET IN TOUCH</a> to know more about me.
            </p>
          </div>
        </div>
        
        {/* Experience Section */}
        <div className="grid-container">
          <div className="experience-title" id="experience">
            <h2>&lt; Experience /&gt;</h2>
          </div>
          <div className="experience-content">
            <p>
              {/* Your experience content */}
            </p>
            <h3>Tools</h3>
            <div className="tools-container">
              <div className="tool">Python</div>
              <div className="tool">Pandas</div>
              <div className="tool">Matplotlib</div>
              <div className="tool">Flask</div>
              <div className="tool">JavaScript</div>
              <div className="tool">React</div>
              <div className="tool">Bootstrap</div>
              <div className="tool">SQL</div>
              <div className="tool">Postgres</div>
              <div className="tool">Node.js</div>
              <div className="tool">Jest</div>
              <div className="tool">Cypress</div>
              <div className="tool">Tailwind</div>
              <div className="tool">RESTful APIs</div>
              <div className="tool">Vite</div>
            </div>
            <h3>Skills</h3>
            <div className="tools-container">
              <div className="tool">Cross-functional Teams</div>
              <div className="tool">Communication</div>
              <div className="tool">Project Management</div>
              <div className="tool">Problem Solving</div>
              <div className="tool">Backlog Refinement</div>
              <div className="tool">Decision Making</div>
              <div className="tool">Task Prioritization</div>
              <div className="tool">Stakeholder Engagement</div>
              <div className="tool">Agile Ceremonies</div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="grid-container">
          <div className="projects-title" id="projects">
            <h2>&lt; Projects /&gt;</h2>
          </div>
          <div className="projects-content">
            {/* Project 1 */}
            <div className="project-item">
              <h3>League Management</h3>
              <p>This solo project is a management system for sports leagues, allowing users to create teams, schedule matches, and track results. I built the front end using React, designed a RESTful API with Django, and managed data with a Postgres database.</p>
              <ul>
                <li>React</li>
                <li>Django</li>
                <li>PostgreSQL</li>
              </ul>
              <a href="https://github.com/Bobbytx/League_Mgmt_App" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>

            {/* Project 2 */}
            <div className="project-item">
              <h3>Dino Stocks</h3>
              <p>As part of a team, I contributed to a stock simulation app with a dinosaur theme. The app allows users to practice stock trading strategies in a risk-free environment. My focus was on integrating real-time stock data, managing state with React Hooks, user authentication, and UI design.</p>
              <ul>
                <li>React</li>
                <li>Django</li>
                <li>PostgreSQL</li>
              </ul>
              <a href="https://github.com/theQuiltingRiverOtter/dinoStocks" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>

            {/* Project 3 */}
            <div className="project-item">
              <h3>Portfolio Website</h3>
              <p>I created this website from scratch using raw JS, HTML, and CSS in React. The design was created in Figma and I developed it without using any UI libraries. The design and layout is all done using CSS, primarily CSS Grid. The site is responsive to different window sizes to offer a seamless user experience on desktop and mobile screens.</p>
              <ul>
                <li>React</li>
                <li>Javascript</li>
                <li>CSS</li>
              </ul>
              <a href="https://github.com/Bobbytx/Bobbytx.github.io" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App
