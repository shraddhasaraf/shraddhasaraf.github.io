import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const ResumeButton = ({ className = '' }) => {
  const [showToast, setShowToast] = useState(false);

  const handleDownload = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <a
        href="/ShraddhaSaraf_resume.pdf"
        className={`px-4 py-2 bg-secondary text-white rounded-full hover:bg-secondary/80 hover:scale-105 transition-all flex items-center gap-2 shadow-md text-sm ${className}`}
        download="ShraddhaSaraf_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleDownload}
      >
        <FiDownload className="animate-bounce" />
        Resume
      </a>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 bg-secondary text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50"
          >
            <FiDownload />
            Resume download started!
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResumeButton;
