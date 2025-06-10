import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiTrendingUp, FiUsers, FiDatabase, FiShield, FiActivity } from 'react-icons/fi';
import PageBackground from './shared/PageBackground';
import SectionTitle from './shared/SectionTitle';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Energy Price Forecasting',
      icon: <FiTrendingUp className="w-6 h-6 text-secondary" />,
      description: 'Developed an advanced time series forecasting solution for ERCOT\'s day-ahead market, integrating API development, cloud storage, and UI design.',
      technologies: ['Python', 'Time Series Analysis', 'Machine Learning', 'API Development', 'Cloud Storage'],
      github: 'https://github.com/shraddhasaraf/energy-price-predictions',
      demo: '#'
    },
    {
      title: 'SeeMe Personalization Platform',
      icon: <FiActivity className="w-6 h-6 text-secondary" />,
      description: 'Led development of AI-powered personalization features and pricing optimization. Implemented comprehensive A/B testing framework and analytics dashboards for data-driven decision making.',
      technologies: ['Revenue Optimization', 'A/B Testing', 'SQL', 'Data Analytics', 'Product Strategy'],
      github: 'https://github.com/shraddhasaraf/revenue-optimization',
      demo: '#'
    },
    {
      title: 'BluePandaJobs Platform',
      icon: <FiUsers className="w-6 h-6 text-secondary" />,
      description: 'Developed and launched an innovative B2B hiring platform focusing on enterprise recruitment. Implemented data-driven matching algorithms and analytics for improved placement accuracy.',
      technologies: ['Full Stack Development', 'Recruitment Analytics', 'UI/UX', 'Database Design'],
      github: 'https://github.com/shraddhasaraf/bluepandajobs',
      demo: '#'
    },
    {
      title: 'ING Customer Analytics Platform',
      icon: <FiDatabase className="w-6 h-6 text-secondary" />,
      description: 'Spearheaded development of comprehensive customer analytics solution. Implemented automated ETL pipelines and real-time dashboards for customer behavior analysis.',
      technologies: ['Data Analytics', 'ETL', 'Dashboard Development', 'Customer Insights'],
      github: 'https://github.com/shraddhasaraf/customer-analytics',
      demo: '#'
    },
    {
      title: 'Enterprise Compliance Suite',
      icon: <FiShield className="w-6 h-6 text-secondary" />,
      description: 'Enhanced compliance and risk management software for major financial institutions. Implemented automated testing frameworks and optimized delivery processes.',
      technologies: ['Test Automation', 'Risk Management', 'Compliance', 'Enterprise Software'],
      github: 'https://github.com/shraddhasaraf/compliance-suite',
      demo: '#'
    },
    {
      title: 'Healthcare Data Integration System',
      icon: <FiActivity className="w-6 h-6 text-secondary" />,
      description: 'Developed integrated data solution for Medicaid Enterprise Systems. Implemented secure data handling protocols and automated analytics workflows.',
      technologies: ['Healthcare Analytics', 'Data Security', 'System Integration', 'Python'],
      github: 'https://github.com/shraddhasaraf/healthcare-integration',
      demo: '#'
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
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <SectionTitle>Projects</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl group-hover:from-secondary/20 group-hover:to-secondary/10 transition-colors duration-300">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-2">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Demo"
                      className="inline-flex items-center justify-center w-8 h-8 bg-secondary text-white rounded-full hover:bg-secondary/90 transition-colors"
                    >
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Code"
                      className="inline-flex items-center justify-center w-8 h-8 border border-secondary text-secondary rounded-full hover:bg-secondary/10 transition-colors"
                    >
                      <FiGithub className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageBackground>
  );
};

export default Projects;