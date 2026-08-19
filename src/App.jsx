import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero/About Section */}
        <div className="grid-container">
          <div className="hero-title">
            <h1>
              ROBERT
              <br />
              TOTH
            </h1>
            <p className="hero-subtitle">
              Websites /<br></br> Software /<br></br> AI
            </p>
          </div>

          <div className="hero-description" id="about">
            <p>
              I like building things, figuring out how they work, and
              occasionally making them more complicated than necessary. Lately,
              that means websites, AI, automation, and whatever else catches my
              attention.
            </p>
            <a href="mailto:bobby.toth@gmail.com">
              <button className="hero-button">LET'S CONNECT</button>
            </a>
          </div>

          <div className="hero-links">
            <div className="link-left">
              <span>
                <a
                  href="https://github.com/Bobbytx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>{" "}
                /{" "}
                <a
                  href="https://www.linkedin.com/in/roberttothpm/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </span>
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
            <h2>&lt; Offline /&gt;</h2>
          </div>
          <div className="icebreakers-content">
            <p>
              Big sports fan. I follow my Texas teams and love going to games
              whenever I get the chance. I’m always looking for new restaurants
              to try and new places to travel, especially anywhere with a great
              view. Lately, I’ve been learning to play guitar. I also enjoy
              fixing things, working with my hands, and taking on DIY projects
              around the house. Work with me so I can keep funding these
              hobbies.. <a href="mailto:bobby.toth@gmail.com">GET IN TOUCH</a>{" "}
              if you want to know more.
            </p>
          </div>
        </div>

        {/* What I Do Section */}
        <div className="grid-container">
          <div className="experience-title" id="experience">
            <h2>&lt; What I Do /&gt;</h2>
          </div>

          <div className="experience-content">
            <h3>WEB</h3>
            <p>
              I design and build websites with a focus on clean interfaces,
              responsive layouts, performance, and making things actually work.
            </p>

            <h3>AI</h3>
            <p>
              I spend a lot of time evaluating AI outputs and experimenting with
              AI-assisted development, local models, computer vision, and
              whatever else seems interesting.
            </p>

            <h3>AUTOMATION</h3>
            <p>
              If I have to do something repeatedly, there&apos;s a decent chance
              I&apos;ll spend more time automating it than it would have taken
              to just do it.
            </p>

            <h3>PROBLEM SOLVING</h3>
            <p>
              I like figuring things out. Software, websites, computers,
              cameras, home projects, and anything else that gives me a problem
              to solve.
            </p>
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
              <p>
                This solo project is a management system for sports leagues,
                allowing users to create teams, schedule matches, and track
                results. I built the front end using React, designed a RESTful
                API with Django, and managed data with a Postgres database.
              </p>
              <ul>
                <li>React</li>
                <li>Django</li>
                <li>PostgreSQL</li>
              </ul>
              <a
                href="https://github.com/Bobbytx/League_Mgmt_App"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>

            {/* Project 2 */}
            <div className="project-item">
              <h3>Dino Stocks</h3>
              <p>
                As part of a team, I contributed to a stock simulation app with
                a dinosaur theme. The app allows users to practice stock trading
                strategies in a risk-free environment. My focus was on
                integrating real-time stock data, managing state with React
                Hooks, user authentication, and UI design.
              </p>
              <ul>
                <li>React</li>
                <li>Django</li>
                <li>PostgreSQL</li>
              </ul>
              <a
                href="https://github.com/theQuiltingRiverOtter/dinoStocks"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>

            {/* Project 3 */}
            <div className="project-item">
              <h3>Portfolio Website</h3>
              <p>
                I created this website from scratch using raw JS, HTML, and CSS
                in React. The design was created in Figma and I developed it
                without using any UI libraries. The design and layout is all
                done using CSS, primarily CSS Grid. The site is responsive to
                different window sizes to offer a seamless user experience on
                desktop and mobile screens.
              </p>
              <ul>
                <li>React</li>
                <li>Javascript</li>
                <li>CSS</li>
              </ul>
              <a
                href="https://github.com/Bobbytx/Bobbytx.github.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
