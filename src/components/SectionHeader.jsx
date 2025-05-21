import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-800 mb-4 relative inline-block"
      >
        {title}
        <div className="absolute left-0 right-0 -bottom-2 h-1 bg-gradient-to-r from-secondary to-blue-600 rounded-full"></div>
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
