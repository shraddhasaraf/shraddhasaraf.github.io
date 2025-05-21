import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Led development of enterprise-scale web applications using React and Node.js.'
    },
    {
      title: 'Software Engineer',
      company: 'Digital Innovations Ltd.',
      period: '2020 - 2022',
      description: 'Developed and maintained full-stack applications using modern technologies.'
    }
  ];

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'University of Technology',
      year: '2018 - 2020'
    },
    {
      degree: 'Bachelor of Technology in Computer Science',
      school: 'Institute of Engineering',
      year: '2014 - 2018'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <motion.h2 
        className="text-4xl font-bold mb-8 text-gray-800 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-2/3 after:h-1 after:bg-secondary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-secondary">Who I Am</h3>
          <p className="text-gray-600 mb-6">
            I'm a passionate software engineer with a strong foundation in full-stack development.
            My journey in tech began with a curiosity about how things work, which evolved into a
            career building innovative solutions for complex problems.
          </p>
          <p className="text-gray-600">
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source
            projects, or sharing my knowledge through technical writing and mentoring.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h3 className="text-2xl font-bold mb-6 text-secondary">Experience</h3>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-xl font-semibold text-gray-800">{exp.title}</h4>
              <p className="text-secondary font-medium">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}

          <h3 className="text-2xl font-bold mb-6 text-secondary mt-8">Education</h3>
          {education.map((edu, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-xl font-semibold text-gray-800">{edu.degree}</h4>
              <p className="text-secondary font-medium">{edu.school}</p>
              <p className="text-sm text-gray-500">{edu.year}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;