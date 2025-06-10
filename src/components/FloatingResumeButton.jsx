import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const FloatingResumeButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300); // Show button after scrolling 300px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = () => {
    const resumePath = `${process.env.PUBLIC_URL}/ShraddhaSaraf_resume.pdf`;
    window.open(resumePath, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={handleDownload}
          className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-md shadow-lg hover:bg-secondary/90 transition-colors group"
        >
          <FiDownload className="w-4 h-4 group-hover:animate-bounce" />
          <span className="text-sm font-medium">Resume</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default FloatingResumeButton;
