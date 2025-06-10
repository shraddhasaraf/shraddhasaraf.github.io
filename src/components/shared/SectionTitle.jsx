import React from 'react';

const SectionTitle = ({ children }) => {
  return (
    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-secondary to-blue-400 bg-clip-text text-transparent">
      {children}
    </h2>
  );
};

export default SectionTitle;
