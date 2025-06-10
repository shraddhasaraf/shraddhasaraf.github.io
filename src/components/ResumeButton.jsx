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
        className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-secondary rounded-md shadow-sm hover:bg-secondary/90 transition-all ${className}`}
        download="ShraddhaSaraf_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleDownload}
      >
        <FiDownload className="w-4 h-4" />
        Download Resume
      </a>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 bg-secondary text-white px-4 py-2 rounded-md shadow-md flex items-center gap-2 z-50 text-sm"
          >
            <FiDownload className="w-4 h-4" />
            Resume download started!
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResumeButton;
