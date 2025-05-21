import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FiGithub size={20} />,
      href: 'https://github.com/username',
      label: 'GitHub'
    },
    {
      icon: <FiLinkedin size={20} />,
      href: 'https://linkedin.com/in/username',
      label: 'LinkedIn'
    },
    {
      icon: <FiTwitter size={20} />,
      href: 'https://twitter.com/username',
      label: 'Twitter'
    }
  ];

  return (
    <footer className="bg-tertiary py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-lightText hover:text-secondary transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-lightText text-sm">
            © {new Date().getFullYear()} Rushabh Thakkar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;