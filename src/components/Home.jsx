import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const Home = () => {
  const [showToast, setShowToast] = useState(false);

  const handleDownload = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-secondary text-lg mb-4 font-medium"
        >
          Hi, I'm
        </motion.h2>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold font-heading tracking-tight mb-4 text-gray-500"
        >
          Shraddha Saraf.
        </motion.h1>
        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl md:text-3xl text-muted-foreground mb-6"
        >
          Data & Product Professional
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lightText text-lg max-w-xl mb-8"
        >
          I’m a data-driven product professional with a background in consulting and a strong focus on leveraging analytics to inform strategy, optimize user experience, and deliver scalable solutions. 
          My expertise lies in translating complex data into actionable insights that guide product development and business decisions. 
          I excel at collaborating with cross-functional teams to build impactful, user-centric products that drive measurable outcomes.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="px-6 py-3 bg-transparent border-2 border-secondary text-secondary rounded-full hover:bg-secondary/10 transition-all cursor-pointer shadow-sm"
          >
            View My Projects
          </Link>
        
          <a
            href="/resume.pdf"
            className="px-6 py-3 bg-secondary text-white rounded-full hover:bg-secondary/80 hover:scale-105 transition-all flex items-center gap-2 shadow-lg"
            download
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownload}
          >
            <FiDownload className="animate-bounce" />
            Download Resume
          </a>
        </motion.div>

        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-8 right-8 bg-secondary text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2"
            >
              <FiDownload />
              Resume download started!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Home;