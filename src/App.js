import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <main>
        <section id="home" className="min-h-screen">
          <Home />
        </section>
        <section id="about" className="min-h-screen py-20">
          <About />
        </section>
        <section id="projects" className="min-h-screen py-20">
          <Projects />
        </section>
        <section id="skills" className="min-h-screen py-20">
          <Skills />
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
