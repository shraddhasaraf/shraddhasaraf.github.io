import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiStar, FiTarget, FiTrendingUp, FiCode, FiDatabase } from 'react-icons/fi';
import ResumeButton from './ResumeButton';

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
      skills: [
        { name: 'Data Analysis', level: 95 },
        { name: 'SQL & Database Design', level: 90 },
        { name: 'ETL Pipeline Development', level: 85 },
        { name: 'Statistical Analysis', level: 85 },
        { name: 'Data Visualization', level: 90 }
      ]
    },
    {
      category: 'Product Management',
      icon: <FiTrendingUp className="w-6 h-6" />,
      skills: [
        { name: 'Product Strategy', level: 90 },
        { name: 'A/B Testing', level: 95 },
        { name: 'Revenue Optimization', level: 90 },
        { name: 'User Research', level: 85 },
        { name: 'Product Analytics', level: 90 },
        { name: 'Growth Metrics', level: 85 }
      ]
    },
    {
      category: 'Technical Skills',
      icon: <FiCode className="w-6 h-6" />,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Machine Learning', level: 85 },
        { name: 'Time Series Analysis', level: 90 },
        { name: 'API Development', level: 80 },
        { name: 'Cloud Services', level: 85 }
      ]
    },
    {
      category: 'Tools & Platforms',
      skills: [
        { name: 'Tableau', level: 90 },
        { name: 'JIRA', level: 85 },
        { name: 'Git', level: 85 },
        { name: 'Figma', level: 80 },
        { name: 'Azure/AWS', level: 80 }
      ]
    },
    {
      category: 'Leadership',
      skills: [
        { name: 'Team Management', level: 90 },
        { name: 'Stakeholder Communication', level: 95 },
        { name: 'Cross-functional Collaboration', level: 90 },
        { name: 'Project Planning', level: 85 },
        { name: 'Strategic Thinking', level: 90 }
      ]
    },
    {
      category: 'Domain Knowledge',
      skills: [
        { name: 'AI/ML Strategy', level: 90 },
        { name: 'FinTech', level: 85 },
        { name: 'Healthcare Analytics', level: 85 },
        { name: 'Energy Markets', level: 80 },
        { name: 'Enterprise Software', level: 85 }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex justify-between items-center mb-16">
        <motion.h2
          className="text-4xl font-bold text-gray-800 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-2/3 after:h-1 after:bg-secondary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>
        <ResumeButton />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-secondary/10 rounded-full text-secondary">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                {category.category}
              </h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: skillIndex * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600 font-medium">{skill.name}</span>
                    <span className="text-secondary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-secondary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: skillIndex * 0.1,
                        ease: "easeOut"
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.h2
        className="text-4xl font-bold mt-20 mb-12 text-gray-800 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-2/3 after:h-1 after:bg-secondary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Achievements & Recognition
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -8 }}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-secondary/10 rounded-full text-secondary">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
            </div>
            <ul className="space-y-3">
              {category.items.map((item, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: itemIndex * 0.1 }}
                  className="text-gray-600 flex items-start gap-2"
                >
                  <span className="text-secondary mt-1">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;