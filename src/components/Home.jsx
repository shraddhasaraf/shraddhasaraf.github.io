import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-secondary text-lg mb-4"
        >
          Hi, my name is
        </motion.h2>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl sm:text-7xl font-bold mb-4 text-gray-100"
        >
          Rushabh Thakkar.
        </motion.h1>
        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl sm:text-6xl font-bold mb-6 text-lightText"
        >
          I build things for the web.
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lightText text-lg max-w-xl mb-8"
        >
          I'm a full-stack developer specializing in building exceptional digital experiences.
          Currently, I'm focused on building accessible, human-centered products.
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
            className="px-6 py-3 bg-transparent border-2 border-secondary text-secondary rounded hover:bg-secondary/10 transition-all cursor-pointer"
          >
            View My Projects
          </Link>
          
          <a
            href="/resume.pdf"
            className="px-6 py-3 bg-secondary text-primary rounded hover:bg-secondary/90 transition-all flex items-center gap-2"
            download
          >
            <FiDownload />
            Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;