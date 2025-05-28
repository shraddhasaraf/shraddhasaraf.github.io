import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';
import logo from '../assets/data-logo.svg';

const navigation = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Experience', href: 'experience' },
  { name: 'Projects', href: 'projects' },
  { name: 'Skills', href: 'skills' },
  { name: 'Fun Facts', href: 'fun-facts' },
  { name: 'Education', href: 'education' },
  { name: 'Contact', href: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = navigation.map(nav => nav.href);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeClick = (e) => {
    e.preventDefault();
    const resumePath = `${process.env.PUBLIC_URL}/ShraddhaSaraf_resume.pdf`;
    window.open(resumePath, '_blank', 'noopener,noreferrer');
  };

  return (
    <Disclosure as="nav" 
      className={`fixed w-full z-50 transition-all duration-300 
        ${scrolled 
          ? 'bg-white/95 shadow-lg backdrop-blur-sm py-2' 
          : 'bg-transparent py-4'}`}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer flex items-center gap-3 group"
                >
                  <img 
                    src={logo} 
                    alt="SS Logo" 
                    className="w-8 h-8 transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" 
                  />
                  <span className="text-2xl font-bold bg-gradient-to-r from-secondary to-blue-600 bg-clip-text text-transparent">
                    Shraddha Saraf
                  </span>
                </Link>
              </div>

              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer
                        ${activeSection === item.href
                          ? 'text-white bg-secondary shadow-md'
                          : 'text-gray-600 hover:text-secondary hover:bg-secondary/10'
                        }`
                      }
                    >
                      {item.name}
                    </Link>
                  ))}
                  <button
                    onClick={handleResumeClick}
                    className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer text-gray-600 hover:text-secondary hover:bg-secondary/10"
                  >
                    Resume
                  </button>
                </div>
              </div>

              <div className="md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-secondary hover:bg-secondary/10 transition-colors">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm shadow-lg">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className={`block px-4 py-2 text-base font-medium rounded-lg transition-all duration-300
                    ${activeSection === item.href
                      ? 'text-white bg-secondary'
                      : 'text-gray-600 hover:text-secondary hover:bg-secondary/10'
                    }`
                  }
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={handleResumeClick}
                className="w-full text-left block px-4 py-2 text-base font-medium rounded-lg transition-all duration-300 text-gray-600 hover:text-secondary hover:bg-secondary/10"
              >
                Resume
              </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;