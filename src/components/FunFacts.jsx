import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCoffee, FiMusic, FiGlobe, FiBookOpen, 
  FiHeart, FiStar, FiCamera, FiAward 
} from 'react-icons/fi';

const FunFacts = () => {
  const facts = [
    {
      icon: <FiCoffee className="w-6 h-6" />,
      title: "Conversation Enthusiast",
      description: "Deep conversations over chai or black coffee are my favorite way to connect ☕"
    },
    {
      icon: <FiMusic className="w-6 h-6" />,
      title: "Multilingual Singer",
      description: "A passionate cinephile who can serenade you in 10 different Indian languages 🎵 🎬"
    },
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: "World Explorer",
      description: "Finding joy in discovering new places, cultures, and perspectives 🌎"
    },
    {
      icon: <FiStar className="w-6 h-6" />,
      title: "Life of the Party",
      description: "Bringing energy and enthusiasm wherever I go, while never stopping to learn and grow 🎉 ✨"
    },
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: "Cultural Bridge",
      description: "Celebrating diversity through music, dance, and shared experiences 🎭 💃"
    },
    {
      icon: <FiBookOpen className="w-6 h-6" />,
      title: "Eternal Student",
      description: "Always curious to learn something new, from tech trends to cooking recipes 📚 👩‍🍳"
    },
    {
      icon: <FiCamera className="w-6 h-6" />,
      title: "Memory Keeper",
      description: "Capturing life's beautiful moments through photography and storytelling 📸 ✨"
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Team Player",
      description: "Building connections and fostering collaboration with a smile 🤝 💫"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-gray-800 text-center mb-16 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-2/3 after:h-1 after:bg-secondary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Fun Facts
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="inline-block p-4 bg-secondary/10 rounded-full text-secondary mb-4 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                {fact.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-secondary transition-colors duration-300">
                {fact.title}
              </h3>
              <p className="text-gray-600">
                {fact.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
