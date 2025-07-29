import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Home = () => {
  const socialLinks = [
    {
      icon: <FiGithub size={24} />,
      href: 'https://github.com/shraddhasaraf',
      label: 'GitHub'
    },
    {
      icon: <FiLinkedin size={24} />,
      href: 'https://www.linkedin.com/in/shraddhasaraf/',
      label: 'LinkedIn',
      onClick: (e) => {
        e.preventDefault();
        window.open('https://www.linkedin.com/in/shraddhasaraf/', '_blank', 'noopener,noreferrer');
      }
    },
    {
      icon: <FiMail size={24} />,
      href: 'mailto:shraddhasrf@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-6xl w-full z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-secondary text-lg font-medium mb-2">
                Hi there 👋, I'm
              </h2>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 text-gray-800 relative">
                Shraddha Saraf
                <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-secondary"></div>
              </h1>
              <h3 className="text-2xl md:text-3xl text-gray-600 font-medium mb-6">
                Data & Product Professional
              </h3>
              
              <p className="text-gray-600 text-lg max-w-xl mb-8 leading-relaxed">
                Product Manager with 5+ years of experience building data-driven products across finance, healthcare, AI and tech. 
                Passionate about turning complex problems into clear, actionable solutions that drive measurable results.
              </p>

              {/* Social Links */}
              <div className="flex gap-6 justify-center md:justify-start mb-8">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-secondary transform hover:scale-110 transition-all duration-300"
                    aria-label={link.label}
                    onClick={link.onClick}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex flex-wrap gap-4 justify-center md:justify-start"
              >
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="px-8 py-3 bg-gradient-to-r from-secondary to-secondaryLight text-white rounded-full hover:from-secondaryLight hover:to-secondary transition-all cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  View Projects
                </Link>
                
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="px-8 py-3 border-2 border-secondary text-secondary rounded-full hover:bg-gradient-to-r hover:from-secondary hover:to-secondaryLight hover:text-white transition-all cursor-pointer"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div className="absolute inset-0 bg-secondary/10 rounded-full blur-xl transition-all duration-300 group-hover:bg-secondary/20"></div>
              <img
                src={process.env.PUBLIC_URL + '/profile-photo.jpg'}
                alt="Shraddha Saraf"
                className="w-full h-full object-cover rounded-full relative z-10 border-4 border-white shadow-xl transition-transform duration-300 group-hover:scale-105 select-none"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;