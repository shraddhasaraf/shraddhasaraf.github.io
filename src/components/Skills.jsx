import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiAward, 
  FiStar, 
  FiTarget, 
  FiTrendingUp, 
  FiCode, 
  FiDatabase,
  FiTool,
  FiUsers,
  FiGlobe 
} from 'react-icons/fi';

import PageBackground from './shared/PageBackground';
import SectionTitle from './shared/SectionTitle';

const Skills = () => {
  const achievements = [
    {
      icon: <FiTarget className="w-6 h-6" />,
      title: "Leadership & Excellence",
      items: [
        "Awarded 4 Spot Awards and 1 Applause Award at Deloitte for exceptional performance",
        "Recognized as Star Performer for outstanding contribution at AstraZeneca",
        "Led ING Australia project resulting in AU $295M growth and 163,000 new customers"
      ]
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Project Excellence",
      items: [
        "Top performer award for MES project (2019-20)",
        "Top performer award for EPH project (2018-19)",
        "Top performer award for ING project (2017-18)"
      ]
    },
    {
      icon: <FiStar className="w-6 h-6" />,
      title: "Technical Achievements",
      items: [
        "Improved analytics efficiency by 80% through automated dashboards",
        "Reduced manual testing effort by 90% through automation frameworks",
        "Enhanced product delivery time by 25% through optimizations"
      ]
    }
  ];

  const skillCategories = [
    {
      category: 'Data & Analytics',
      icon: <FiDatabase className="w-6 h-6" />,
      skills: ['Data Analysis', 'SQL & Database Design', 'ETL Pipeline Development', 'Statistical Analysis', 'Data Visualization']
    },
    {
      category: 'Product Management',
      icon: <FiTrendingUp className="w-6 h-6" />,
      skills: ['Product Strategy', 'A/B Testing', 'Revenue Optimization', 'User Research', 'Product Analytics', 'Growth Metrics']
    },
    {
      category: 'Technical Skills',
      icon: <FiCode className="w-6 h-6" />,
      skills: ['Python', 'Machine Learning', 'Time Series Analysis', 'API Development', 'Cloud Services']
    },
    {
      category: 'Tools & Platforms',
      icon: <FiTool className="w-6 h-6" />,
      skills: ['Tableau', 'JIRA', 'Git', 'Figma', 'Azure/AWS']
    },
    {
      category: 'Leadership',
      icon: <FiUsers className="w-6 h-6" />,
      skills: ['Team Management', 'Stakeholder Communication', 'Cross-functional Collaboration', 'Project Planning', 'Strategic Thinking']
    },
    {
      category: 'Domain Knowledge',
      icon: <FiGlobe className="w-6 h-6" />,
      skills: ['AI/ML Strategy', 'FinTech', 'Healthcare Analytics', 'Energy Markets', 'Enterprise Software']
    }
  ];

  return (
    <PageBackground>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <SectionTitle>Skills & Achievements</SectionTitle>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-secondary to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {category.icon && <div className="text-secondary mr-3">{category.icon}</div>}
                  <h3 className="text-xl font-semibold text-gray-800">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex} 
                      className="text-gray-600 flex items-center"
                    >
                      <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                      {typeof skill === 'string' ? skill : skill.name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-secondary to-blue-400 bg-clip-text text-transparent">
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-secondary mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{achievement.title}</h3>
                <ul className="space-y-2">
                  {achievement.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 flex items-start">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-2 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>


    </PageBackground>
  );
};

export default Skills;