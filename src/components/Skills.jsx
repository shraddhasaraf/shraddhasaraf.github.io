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
    <div className="min-h-screen bg-gradient-to-b from-white to-tertiary py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <motion.h2
            className="text-4xl font-bold text-gray-800 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-2/3 after:h-1 after:bg-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Skills & Achievements
          </motion.h2>
          <ResumeButton />
        </div>

        {/* Achievements Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{achievement.title}</h3>
              </div>
              <ul className="space-y-2 ml-2">
                {achievement.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.1) }}
                    className="flex items-start gap-2 text-gray-600"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.category}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (i * 0.1) }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-secondary font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (index * 0.1) + (i * 0.1) }}
                        className="h-full bg-secondary rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;