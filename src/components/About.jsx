import React from 'react';
import { motion } from 'framer-motion';

import PageBackground from './shared/PageBackground';
import SectionTitle from './shared/SectionTitle';
import { FiTarget, FiTrendingUp, FiUsers, FiZap } from 'react-icons/fi';

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
    <PageBackground>
      <div className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <SectionTitle>About Me</SectionTitle>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              👋 Hi! I'm a Product Manager with 5+ years of experience building data-driven products across finance, healthcare, and tech for both B2B and B2C users. I specialize in turning complex problems into clear, actionable solutions, whether that means launching new products from the ground up or optimizing internal tools. I lead cross-functional teams with a strong focus on user needs and data, delivering simple, impactful solutions that improve efficiency and drive measurable results.
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


        </motion.div>
      </div>
    </PageBackground>
  );
};

export default About;