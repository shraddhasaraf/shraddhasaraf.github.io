import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiUser, FiMessageSquare, FiSend, FiCheck } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setErrors({});
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setShowSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setShowSuccess(false), 5000);
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
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

  const inputClasses = (error) => `
    w-full px-4 py-3 bg-white rounded-lg border 
    ${error ? 'border-red-500' : 'border-gray-200'} 
    text-gray-800 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary
    transition-colors pl-10
  `;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center mb-10">
        <motion.h2
          className="text-4xl font-bold mb-4 text-gray-800 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-2/3 after:h-1 after:bg-secondary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          className="text-gray-600 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Feel free to reach out for collaborations, opportunities, or just a friendly chat!
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-6">
        {contactInfo.map((info, index) => (
          <motion.a
            key={index}
            href={info.href}
            target={info.href.startsWith('http') ? '_blank' : undefined}
            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-4"
          >
            <div className="p-3 bg-secondary/10 rounded-full text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
              {info.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">{info.title}</h3>
              <p className="text-gray-600">{info.content}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl p-8 shadow-lg space-y-6"
        >
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={inputClasses(errors.name)}
            />
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-1"
              >
                {errors.name}
              </motion.p>
            )}
          </div>

          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={inputClasses(errors.email)}
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-1"
              >
                {errors.email}
              </motion.p>
            )}
          </div>

          <div className="relative">
            <FiMessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className={inputClasses(errors.subject)}
            />
            {errors.subject && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-1"
              >
                {errors.subject}
              </motion.p>
            )}
          </div>

          <div className="relative">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`${inputClasses(errors.message)} pl-4`}
            />
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-1"
              >
                {errors.message}
              </motion.p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center gap-2 
              ${isSubmitting ? 'bg-gray-400' : 'bg-secondary hover:bg-secondary/90'} 
              transition-colors duration-300`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <FiSend className="w-5 h-5" />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl p-8 shadow-lg h-full"
        >
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12743563.55069247!2d-98.7937925776553!3d39.37957375642143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sus!4v1684701661317!5m2!1sen!2sus"
              className="w-full h-full rounded-lg"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Location</h3>
          <p className="text-gray-600">Currently in the United States, I'm open to relocation opportunities across the country.</p>
        </motion.div>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2"
          >
            <FiCheck className="w-5 h-5" />
            Message sent successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;