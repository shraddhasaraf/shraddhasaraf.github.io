import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary text-gray-800">
      <Navbar />
      <main className="bg-gradient-to-b from-primary to-tertiary">
        <section id="home" className="min-h-screen">
          <Home />
        </section>
        <section id="about" className="min-h-screen py-20">
          <About />
        </section>
        <section id="experience" className="min-h-screen py-20">
          <Experience />
        </section>
        <section id="projects" className="min-h-screen py-20">
          <Projects />
        </section>
        <section id="skills" className="min-h-screen py-20">
          <Skills />
        </section>
        <section id="education" className="min-h-screen py-20">
          <Education />
        </section>
        <section id="contact" className="min-h-screen py-20">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
