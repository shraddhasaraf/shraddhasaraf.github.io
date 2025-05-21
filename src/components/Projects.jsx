import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'A real-time analytics dashboard using machine learning to predict user behavior and provide actionable insights.',
      tech: ['React', 'Python', 'TensorFlow', 'AWS'],
      github: 'https://github.com/username/project1',
      demo: 'https://demo-project1.com'
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management and payment processing.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/username/project2',
      demo: 'https://demo-project2.com'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management platform with real-time updates and team analytics.',
      tech: ['React', 'Firebase', 'Material-UI', 'Chart.js'],
      github: 'https://github.com/username/project3',
      demo: 'https://demo-project3.com'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-tertiary rounded-lg p-6 hover:transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <div className="flex gap-4">
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

            <p className="text-lightText mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-secondary text-sm px-3 py-1 rounded-full bg-secondary/10"
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