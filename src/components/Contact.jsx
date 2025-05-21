import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: 'Email',
      content: 'shraddhasrf@gmail.com',
      href: 'mailto:shraddhasrf@gmail.com'
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: 'Location',
      content: 'United States',
      href: '#'
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
        Get In Touch
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="flex items-center space-x-4 text-lightText hover:text-secondary transition-colors"
              >
                <div className="text-secondary">{info.icon}</div>
                <div>
                  <h4 className="font-medium">{info.title}</h4>
                  <p>{info.content}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-lightText mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-tertiary rounded border border-gray-600 text-white focus:outline-none focus:border-secondary transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-lightText mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-tertiary rounded border border-gray-600 text-white focus:outline-none focus:border-secondary transition-colors"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-lightText mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-tertiary rounded border border-gray-600 text-white focus:outline-none focus:border-secondary transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-lightText mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 bg-tertiary rounded border border-gray-600 text-white focus:outline-none focus:border-secondary transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-secondary text-primary font-medium rounded hover:bg-secondary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;