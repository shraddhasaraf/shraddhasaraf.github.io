import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiAward, FiBarChart, FiUsers } from 'react-icons/fi';
import ResumeButton from './ResumeButton';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Energy Price Forecasting',
      description: 'Spearheaded development of an advanced time series forecasting solution for ERCOT\'s day-ahead market. Led end-to-end implementation including API development, cloud storage integration, and UI design.',
      impact: '$1.5M+ potential annual profit gains identified',
      tech: ['Python', 'Time Series Analysis', 'Machine Learning', 'API Development', 'Cloud Storage'],
      icon: <FiBarChart className="w-6 h-6" />,
      github: 'https://github.com/shraddhasrf/energy-forecasting',
      demo: '#'
    },
    {
      title: 'SeeMe Personalization Platform',
      description: 'Led development of AI-powered personalization features and pricing optimization. Implemented comprehensive A/B testing framework and analytics dashboards for data-driven decision making.',
      impact: '30% increase in premium user conversion',
      tech: ['Revenue Optimization', 'A/B Testing', 'SQL', 'Data Analytics', 'Product Strategy'],
      icon: <FiUsers className="w-6 h-6" />,
      github: 'https://github.com/shraddhasrf/revenue-optimization',
      demo: '#'
    },
    {
      title: 'BluePandaJobs Platform',
      description: 'Developed and launched an innovative B2B hiring platform focusing on enterprise recruitment. Implemented data-driven matching algorithms and analytics for improved placement accuracy.',
      impact: '182 successful candidate placements',
      tech: ['Full Stack Development', 'Recruitment Analytics', 'UI/UX', 'Database Design'],
      icon: <FiAward className="w-6 h-6" />,
      github: 'https://github.com/shraddhasrf/bluepandajobs',
      demo: '#'
    },
    {
      title: 'ING Customer Analytics Platform',
      description: 'Spearheaded development of comprehensive customer analytics solution. Implemented automated ETL pipelines and real-time dashboards for customer behavior analysis.',
      impact: 'AU $295M growth & 163k new customers',
      tech: ['Data Analytics', 'ETL', 'Dashboard Development', 'Customer Insights'],
      icon: <FiBarChart className="w-6 h-6" />,
      github: 'https://github.com/shraddhasrf/customer-analytics',
      demo: '#'
    },
    {
      title: 'Enterprise Compliance Suite',
      description: 'Enhanced compliance and risk management software for major financial institutions. Implemented automated testing frameworks and optimized delivery processes.',
      impact: '90% reduction in manual testing effort',
      tech: ['Test Automation', 'Risk Management', 'Compliance', 'Enterprise Software'],
      icon: <FiAward className="w-6 h-6" />,
      github: 'https://github.com/shraddhasrf/compliance-suite',
      demo: '#'
    },
    {
      title: 'Healthcare Data Integration System',
      description: 'Developed integrated data solution for Medicaid Enterprise Systems. Implemented secure data handling protocols and automated analytics workflows.',
      impact: '80% improvement in analytics efficiency',
      tech: ['Healthcare Analytics', 'Data Security', 'System Integration', 'Python'],
      icon: <FiUsers className="w-6 h-6" />,
      github: 'https://github.com/shraddhasrf/healthcare-integration',
      demo: '#'
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
          Featured Projects
        </motion.h2>
        <ResumeButton />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary/10 rounded-full text-secondary">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
              </div>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lightText hover:text-secondary transition-colors"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lightText hover:text-secondary transition-colors"
                >
                  <FiExternalLink size={20} />
                </a>
              </div>
            </div>

            <p className="text-gray-600 mb-4">{project.description}</p>
            
            <div className="bg-secondary/5 rounded-lg p-3 mb-4">
              <p className="text-secondary font-semibold">{project.impact}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-sm px-3 py-1 bg-tertiary rounded-full text-gray-600 hover:bg-secondary/10 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;