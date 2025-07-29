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
        "Led product initiatives that generated AU $295M growth and acquired 163,000 new customers"
      ]
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Product Impact",
      items: [
        "Boosted profits by over $1.5M through AI-powered energy price forecasting dashboard",
        "Increased customer engagement by 30% through AI-driven roadmap creation feature",
        "Reduced time-to-launch by 20% through streamlined agile workflows"
      ]
    },
    {
      icon: <FiStar className="w-6 h-6" />,
      title: "Technical Achievements",
      items: [
        "Automated 4-day manual process down to 5 minutes for 1M+ rows of data",
        "Cut manual testing by 90% and boosted release velocity by 25%",
        "Reduced ramp-up time by 40% through improved onboarding systems"
      ]
    }
  ];

  const skillCategories = [
    {
      category: 'Product Management',
      icon: <FiTrendingUp className="w-6 h-6" />,
      skills: ['Product Strategy', 'Roadmapping', 'A/B Testing', 'Workflow Automation', 'Data-Driven Decision Making', 'Stakeholder Communication']
    },
    {
      category: 'Technical Skills',
      icon: <FiCode className="w-6 h-6" />,
      skills: ['Python', 'SQL', 'FastAPI', 'Metadata Modeling', 'ETL Pipelines', 'Machine Learning', 'AI/ML Integration']
    },
    {
      category: 'Data & Analytics',
      icon: <FiDatabase className="w-6 h-6" />,
      skills: ['Tableau', 'Power BI', 'Streamlit', 'Statistical Analysis', 'Data Visualization', 'Real-time Dashboards']
    },
    {
      category: 'Tools & Platforms',
      icon: <FiTool className="w-6 h-6" />,
      skills: ['Figma', 'Jira', 'GitHub', 'S3', 'Creative Asset Pipelines', 'Agile Framework']
    },
    {
      category: 'Leadership & Collaboration',
      icon: <FiUsers className="w-6 h-6" />,
      skills: ['Team Management', 'Cross-functional Alignment', 'GTM Strategy', 'User Research', 'Onboarding Systems']
    },
    {
      category: 'Interests & Focus Areas',
      icon: <FiGlobe className="w-6 h-6" />,
      skills: ['Product-Led Growth', 'AI and Machine Learning', 'Generative AI', 'Monetization', 'Healthcare Tech', 'FinTech']
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