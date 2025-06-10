import React from 'react';
import { motion } from 'framer-motion';

const PageBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background gradient and blobs */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="fixed top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: 2,
        }}
        className="fixed top-40 right-10 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-2xl opacity-20"
      />
      
      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {children}
      </div>
    </div>
  );
};

export default PageBackground;
