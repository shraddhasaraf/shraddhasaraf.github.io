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

        <div className="grid md:grid-cols-2 gap-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <FiBook className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{edu.degree}</h3>
                  <p className="text-secondary font-medium">{edu.school}</p>
                  <div className="flex items-center gap-2 text-gray-500 mt-1">
                    <FiCalendar className="w-4 h-4" />
                    <span>{edu.year}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Key Courses</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, courseIndex) => (
                    <span
                      key={courseIndex}
                      className="text-sm px-3 py-1 bg-tertiary rounded-full text-gray-600"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Certifications</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{cert.name}</h4>
                <p className="text-secondary">{cert.issuer}</p>
                <div className="flex items-center gap-2 text-gray-500 mt-1">
                  <FiCalendar className="w-4 h-4" />
                  <span>{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
