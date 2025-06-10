import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

import SectionTitle from './shared/SectionTitle';
import PageBackground from './shared/PageBackground';

const Experience = () => {
  const experiences = [
    {
      title: 'Technical Lead',
      company: 'New Grid Consulting',
      period: 'Dec 2024 - May 2025',
      description: 'Spearheaded AI-powered time series forecasting solution for ERCOTs day-ahead market. Led product design and deployment across API, cloud storage, and UI. Drove business analytics uncovering $1.5M+ in potential annual profit gains.'
    },
    {
      title: 'Product Manager',
      company: 'SeeMe',
      period: 'Oct 2024 - Dec 2024',
      description: 'Designed pricing strategies for AI-powered features, increasing revenue by 15%. Led monetization experiments improving premium conversion by 30%. Developed A/B tests and SQL-based revenue dashboards.'
    },
    {
      title: 'Founder & CEO',
      company: 'BluePandaJobs',
      period: 'Jul 2021 - Aug 2023',
      description: 'Built a B2B hiring platform streamlining recruitment for enterprise clients. Successfully placed 182 candidates, enhancing client satisfaction through data-driven improvements.'
    },
    {
      title: 'SDET',
      company: 'Mitratech',
      period: 'Mar 2020 - Jun 2021',
      description: 'Managed compliance software for clients including BlackRock and Shell. Enhanced product quality, improved delivery time by 25%, and reduced manual testing by 90%.'
    },
    {
      title: 'Consultant',
      company: 'Deloitte USI Consulting',
      period: 'Jan 2016 - Feb 2020',
      description: 'Delivered technical consulting for Healthcare, Banking, and Governance sectors. Developed ETL pipelines & automated dashboards, improving efficiency by 80%. Solutions helped ING Australia gain AU $295M and 163,000 new customers.'
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
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <SectionTitle>Experience</SectionTitle>

          <div className="space-y-8 mt-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-lg p-8 relative hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-secondary/20">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl mt-1 group-hover:from-secondary/20 group-hover:to-secondary/10 transition-colors duration-300">
                        <FiBriefcase className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-secondary transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-secondary font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 mt-2 md:mt-0 bg-gray-50 px-4 py-2 rounded-full">
                      <FiCalendar className="w-5 h-5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="ml-[3.25rem] md:ml-[4.25rem]">
                    <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>


        </motion.div>
      </div>
    </PageBackground>
  );
};

export default Experience;
