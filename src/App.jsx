//import { useState, useEffect } from 'react'
import './App.css'
import About from "./components/About";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Icebreakers from "./components/Icebreakers";
import Projects from './components/Projects';
import React from 'react'

function App() {
  return (
    <main className="main">
      <Navbar />
      <About />
      <Experience />
      <Icebreakers />
      <Projects />
    </main>
  );
}
export default App
