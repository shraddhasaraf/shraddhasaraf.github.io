import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiTrendingUp, FiUsers, FiZap } from 'react-icons/fi';
import ResumeButton from './ResumeButton';

const About = () => {
  const highlights = [
    {
      icon: <FiTarget />,
      title: "Data-Driven Decision Maker",
      description: "Passionate about leveraging data analytics to drive product strategy and business growth"
    },
    {
      icon: <FiTrendingUp />,
      title: "Product Strategy Expert",
      description: "Specialized in AI strategy, revenue growth, and product monetization with proven success"
    },
    {
      icon: <FiUsers />,
      title: "Cross-functional Leader",
      description: "Strong track record of leading teams and collaborating across engineering, design, and marketing"
    },
    {
      icon: <FiZap />,
      title: "Innovation Driver",
      description: "Consistently delivering impactful solutions through experimentation and data-driven insights"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex justify-between items-center mb-8">
        <motion.h2 
          className="text-4xl font-bold text-gray-800 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-2/3 after:h-1 after:bg-secondary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <ResumeButton />
      </div>

      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 leading-relaxed"
        >
          👋 Hi! I'm a Data-driven Product Professional with a passion for building innovative solutions 
          that drive business growth. With 6+ years of experience, I specialize in AI strategy, 
          revenue optimization, and creating exceptional user experiences through data-driven decision making.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-secondary/10 rounded-full text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-secondary transition-colors duration-300">
                {highlight.title}
              </h3>
            </div>
            <p className="text-gray-600 ml-[3.25rem]">
              {highlight.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;