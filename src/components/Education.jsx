import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiCalendar } from 'react-icons/fi';
import ResumeButton from './ResumeButton';

const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Business Analytics',
      school: 'W. P. Carey School of Business at Arizona State University',
      year: '2025',
      courses: [
        'Data Analytics',
        'Machine Learning',
        'Natural Language Processing',
        'Data Structures',
        'DBMS'
      ]
    },
    {
      degree: 'Bachelor of Technology in Software Engineering',
      school: 'SRM University',
      year: '2015',
      courses: [
        'Computer Science',
        'Software Engineering',
        'Database Systems',
        'Algorithms',
        'Web Development'
      ]
    }
  ];

  const certifications = [
    {
      name: 'Introduction to Python',
      issuer: 'Coursera',
      year: '2024'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-tertiary py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-gray-800 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-2/3 after:h-1 after:bg-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Education & Certifications
          </motion.h2>
          <ResumeButton />
        </div>

        {/* Education Section */}
        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-full text-secondary mt-1">
                    <FiBook className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{edu.degree}</h3>
                    <p className="text-secondary font-medium">{edu.school}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500 mt-4 md:mt-0 bg-gray-50 px-4 py-2 rounded-full">
                  <FiCalendar className="w-5 h-5" />
                  <span>{edu.year}</span>
                </div>
              </div>
              
              <div className="ml-[3.25rem] md:ml-[4.25rem]">
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Key Courses</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.1) }}
                      className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium hover:bg-secondary hover:text-white transition-colors duration-300"
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Professional Certifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-800">{cert.name}</h4>
                  <div className="text-sm text-gray-500 flex items-center gap-1">
                    <FiCalendar className="w-4 h-4" />
                    {cert.year}
                  </div>
                </div>
                <p className="text-secondary">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
