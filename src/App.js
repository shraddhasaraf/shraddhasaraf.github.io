import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Analytics from './components/Analytics';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FunFacts from './components/FunFacts';
import FloatingResumeButton from './components/FloatingResumeButton';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary">
        <Analytics />
        <Navbar />
        <FloatingResumeButton />
        <main>
          <section id="home" className="min-h-screen">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="fun-facts">
            <FunFacts />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
