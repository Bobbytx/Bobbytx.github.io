import "./App.css";
import Navbar from "./components/Navbar";
import PropTypes from "prop-types";

const featuredProjects = [
  {
    number: "01", slug: "wildlife", title: "Local Wildlife AI", eyebrow: "COMPUTER VISION / ONGOING",
    description: "A local-first pipeline that turns security-camera footage into useful wildlife sightings: detect the animal, isolate the crop, identify the species, and keep the queue moving without sending footage to the cloud.",
    technologies: ["Python", "Computer Vision", "Local AI", "Automation"],
    notes: ["Footage stays local", "Continuous processing", "AI-assisted build"],
    link: null, linkLabel: "PRIVATE BUILD",
  },
  {
    number: "02", slug: "league", title: "League Management", eyebrow: "FULL-STACK APPLICATION",
    description: "A sports-league management system for creating teams, scheduling matches, and tracking results. The front end and API were built as one connected system, backed by a relational data model.",
    technologies: ["React", "Django", "REST API", "PostgreSQL"],
    notes: ["Solo project", "End-to-end build", "Sports data"],
    link: "https://github.com/Bobbytx/League_Mgmt_App", linkLabel: "VIEW SOURCE ↗",
  },
];

const otherProjects = [
  { index: "A", title: "Dino Stocks", description: "A delightfully strange team-built stock simulator: market data, authentication, trading practice, and dinosaurs in the same sentence.", technologies: "React / Django / PostgreSQL", link: "https://github.com/theQuiltingRiverOtter/dinoStocks" },
  { index: "B", title: "This Website", description: "Designed in Figma and built without a UI library. The ongoing experiment is the point: custom grid, custom type, and no template pretending to know me.", technologies: "React / JavaScript / CSS", link: "https://github.com/Bobbytx/Bobbytx.github.io" },
];

function WildlifeVisual() {
  return (
    <div className="project-visual wildlife-visual" role="img" aria-label="Concept artwork showing a raccoon identified by a local wildlife detection system">
      <div className="visual-bar"><span>CAM_03 // BACK YARD</span><span className="live-indicator">LOCAL PROCESSING</span></div>
      <div className="camera-scene">
        <div className="timestamp">02:14:36&nbsp;&nbsp; 08.17.26</div><div className="scan-lines" aria-hidden="true" />
        <div className="raccoon" aria-hidden="true"><span className="ear ear-left" /><span className="ear ear-right" /><span className="face"><i className="mask mask-left" /><i className="mask mask-right" /><b className="nose" /></span></div>
        <div className="detection-box"><span>RACCOON</span><strong>97.8%</strong></div>
        <span className="reticle reticle-one" aria-hidden="true" /><span className="reticle reticle-two" aria-hidden="true" />
      </div>
      <div className="visual-footer"><span>DETECTION: CONFIRMED</span><span>FRAME 1842 / QUEUE 006</span></div>
    </div>
  );
}

function LeagueVisual() {
  const matches = [["NORTHSIDE", "3", "FINAL"], ["UNITED", "2", "FINAL"], ["RANGERS", "—", "SAT 19:30"]];
  return (
    <div className="project-visual league-visual" role="img" aria-label="Concept diagram representing schedules, teams, and results in the league management project">
      <div className="league-heading"><span>WEEK 08</span><strong>LEAGUE//OPS</strong></div>
      <div className="standings-label">MATCH CONTROL</div>
      <div className="match-list">{matches.map(([team, score, status], index) => <div className="match-row" key={team}><span>0{index + 1}</span><strong>{team}</strong><b>{score}</b><small>{status}</small></div>)}</div>
      <div className="league-system"><span>TEAMS</span><i /><span>SCHEDULE</span><i /><span>RESULTS</span></div>
      <div className="league-footer">SYSTEM ONLINE <span>●</span></div>
    </div>
  );
}

const visuals = { wildlife: <WildlifeVisual />, league: <LeagueVisual /> };

function FeaturedProject({ project, reverse }) {
  return (
    <article className={`featured-project ${reverse ? "featured-project--reverse" : ""}`}>
      <div className="project-copy">
        <div className="project-index" aria-hidden="true">{project.number}</div><p className="project-eyebrow">{project.eyebrow}</p><h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="project-notes" aria-label="Project details">{project.notes.map((note) => <li key={note}>{note}</li>)}</ul>
        <ul className="project-tech" aria-label="Technologies used">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
        {project.link ? <a className="project-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel}</a> : <span className="project-link project-link--inactive">{project.linkLabel}</span>}
      </div>
      {visuals[project.slug]}
    </article>
  );
}

FeaturedProject.propTypes = {
  project: PropTypes.shape({
    number: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    eyebrow: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    notes: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string,
    linkLabel: PropTypes.string.isRequired,
  }).isRequired,
  reverse: PropTypes.bool,
};

FeaturedProject.defaultProps = { reverse: false };

function App() {
  const services = [
    ["WEB", "I design and build websites with a focus on clean interfaces, responsive layouts, performance, and making things actually work."],
    ["AI", "I spend a lot of time evaluating AI outputs and experimenting with AI-assisted development, local models, computer vision, and whatever else seems interesting."],
    ["AUTOMATION", "If I have to do something repeatedly, there’s a decent chance I’ll spend more time automating it than it would have taken to just do it."],
    ["PROBLEM SOLVING", "I like figuring things out. Software, websites, computers, cameras, home projects, and anything else that gives me a problem to solve."],
  ];

  return (
    <><Navbar /><main>
      <section className="hero section-grid" id="about" aria-labelledby="hero-title">
        <div className="hero-instrumentation" aria-hidden="true">
          <span className="hero-home-index">01 / HOME</span>
          <span className="hero-measure" />
        </div>
        <div className="hero-title"><p className="section-coordinate" aria-hidden="true">31.9686° N / 99.9018° W</p><h1 id="hero-title">ROBERT<br />TOTH</h1><p className="hero-subtitle">Websites /<br />Software /<br />AI</p></div>
        <div className="hero-description"><div className="hero-description-label"><span>CURRENTLY</span><strong>WEB + AI + AUTOMATION</strong></div><p>I build thoughtful digital products and explore the systems behind them. Lately, my work has centered on websites, software, AI, and automation—usually with room for an experiment or two along the way.</p><a href="mailto:bobby.toth@gmail.com" className="button-link">LET&apos;S CONNECT <span>↗</span></a></div>
        <div className="hero-links"><div className="link-left"><a href="https://github.com/Bobbytx" target="_blank" rel="noreferrer">GitHub</a><span> / </span><a href="https://www.linkedin.com/in/roberttothpm/" target="_blank" rel="noreferrer">LinkedIn</a></div><a href="#what-i-do" className="scroll-link"><span className="scroll-meta">NEXT / 01</span><span className="scroll-rule" aria-hidden="true"><i /></span><span className="arrow" aria-hidden="true">↓</span><span>Scroll down</span></a></div>
      </section>

      <section className="content-section section-grid" id="what-i-do" aria-labelledby="services-title">
        <div className="section-title"><span className="section-number">01 / 04</span><h2 id="services-title">&lt; What I Do /&gt;</h2></div>
        <div className="section-content service-list">{services.map(([title, copy], index) => <article className="service-item" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
      </section>

      <section className="projects-section" id="projects" aria-labelledby="projects-title">
        <div className="projects-heading section-grid"><div className="section-title"><span className="section-number">02 / 04</span><h2 id="projects-title">&lt; Projects /&gt;</h2></div><p>Selected things I’ve made, overthought, rebuilt, or taught a computer to recognize.</p></div>
        <div className="featured-projects">{featuredProjects.map((project, index) => <FeaturedProject project={project} reverse={index % 2 === 1} key={project.slug} />)}</div>
      </section>

      <section className="other-section section-grid" id="other-things" aria-labelledby="other-title">
        <div className="section-title"><span className="section-number">03 / 04</span><h2 id="other-title">&lt; Other Things /&gt;</h2></div>
        <div className="other-list">{otherProjects.map((project) => <a href={project.link} target="_blank" rel="noreferrer" className="other-project" key={project.title}><span className="other-index">{project.index}</span><div><h3>{project.title}</h3><p>{project.description}</p><small>{project.technologies}</small></div><span className="other-arrow" aria-hidden="true">↗</span></a>)}</div>
      </section>

      <section className="content-section offline-section section-grid" id="offline" aria-labelledby="offline-title">
        <div className="section-title"><span className="section-number">04 / 04</span><h2 id="offline-title">&lt; Offline /&gt;</h2></div>
        <div className="section-content offline-content"><p>Big sports fan. I follow my Texas teams and love going to games whenever I get the chance. I’m always looking for new restaurants to try and new places to travel, especially anywhere with a great view. Lately, I’ve been learning to play guitar. I also enjoy fixing things, working with my hands, and taking on DIY projects around the house. Work with me so I can keep funding these hobbies. <a href="mailto:bobby.toth@gmail.com">GET IN TOUCH ↗</a>{" "}if you want to know more.</p></div>
      </section>

      <footer className="site-footer"><p>ROBERT TOTH © {new Date().getFullYear()}</p><p>Made in Texas. Probably revised again soon.</p><a href="#about">BACK TO TOP ↑</a></footer>
    </main></>
  );
}

export default App;
