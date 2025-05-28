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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary text-gray-800">
        <Analytics />
        <Navbar />
        <main className="bg-gradient-to-b from-primary to-tertiary">
          <section id="home" className="min-h-screen">
            <Home />
          </section>
          <section id="about" className="min-h-screen py-12">
            <About />
          </section>
          <section id="experience" className="min-h-screen py-12">
            <Experience />
          </section>
          <section id="projects" className="min-h-screen py-12">
            <Projects />
          </section>
          <section id="skills" className="min-h-screen py-12">
            <Skills />
          </section>
          <section id="fun-facts" className="min-h-screen py-12">
            <FunFacts />
          </section>
          <section id="education" className="py-12">
            <Education />
          </section>
          <section id="contact" className="py-12">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
