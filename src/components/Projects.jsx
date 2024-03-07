import React from 'react'

function Projects() {
  return (
    <div className="grid-container">
      <div className="projects-title" id="projects">
        <h2>&lt; Projects /&gt;</h2>
      </div>
      <div className="projects-content">

        {/* Project 1 */}
        <div className="project-item">
          {/* <img src={project1Image} alt="League Management Project Screenshot" /> */}
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
          {/* <img src={project2Image} alt="Dino Stocks Project Screenshot" /> */}
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
          {/* <img src={project2Image} alt="Dino Stocks Project Screenshot" /> */}
          <h3>Portfolio Website</h3>
            <p>I created this website usingfrom scratch using raw JS, HTML, and CSS in React. The design was created in Figma and I developed it without using any UI libraries. The design and layout is all done using CSS, primarily CSS Grid. The site is responsive to different window sizes to offer a seamless user experience on desktop and mobile screens.</p>
            <ul>
              <li>React</li>
              <li>Javascript</li>
              <li>CSS</li>
            </ul>
            <a href="https://github.com/Bobbytx/Bobbytx.github.io" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>

      </div>
    </div>
  );
}

export default Projects;