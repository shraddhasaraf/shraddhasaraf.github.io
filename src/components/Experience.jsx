import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

import SectionTitle from './shared/SectionTitle';
import PageBackground from './shared/PageBackground';

const Experience = () => {
  const experiences = [
    {
      title: 'Design Product Manager',
      company: 'Hack for LA - Expunge Assist',
      period: 'Jun 2025 - Present',
      description: 'Defined MVP roadmap and streamlined creative workflows using GitHub and Figma, ran weekly syncs, and built onboarding systems, boosting design velocity, improving cross-functional alignment, and reducing ramp-up time by 40%.'
    },
    {
      title: 'Product Consultant',
      company: 'New Grid Consulting - ERCOT',
      period: 'Dec 2024 - May 2025',
      description: 'Defined and communicated product vision, strategy, and roadmap for an AI powered dashboard that forecasts real-time energy prices, enabling battery owners to bid smarter and boosting profits by over $1.5M across hubs. Collaborated with engineering and data teams to design data ingestion API workflows, automating a 4-day manual process down to 5 minutes for 1M+ rows of data.'
    },
    {
      title: 'Product Management Intern',
      company: 'SeeMe - Mental Health & Habit Tracking App',
      period: 'Aug 2024 - Dec 2024',
      description: 'Led development of an AI-driven roadmap creation feature based on user-defined goals, boosting customer satisfaction and increasing engagement by 30%. Conducted usability and A/B testing, monitored KPIs on real-time dashboard, and streamlined product workflows using agile framework, reducing time-to-launch by 20%.'
    },
    {
      title: 'Founder & Product Strategist',
      company: 'BluePandaJobs',
      period: 'Jul 2021 - Aug 2023',
      description: 'Founded and built BluePandaJobs, designing the full recruitment workflow and platform to match 180+ candidates with employers across the blue-collar job market. Implemented GTM strategy, user research, and feedback loops, growing job postings by 30% quarterly and placements by 20%, while managing a 4-member team.'
    },
    {
      title: 'Software Development Engineer',
      company: 'Mitratech - CMO (Compliance Manager)',
      period: 'Mar 2020 - Jun 2021',
      description: 'Drove automation strategy, cutting manual testing by 90% and boosting release velocity by 25% through cross-team collaboration. Aligned quality benchmarks and sprint goals with developers and PMs, improving defect triaging and resolution speed.'
    },
    {
      title: 'Consultant',
      company: 'Deloitte - Strategy & Analytics',
      period: 'Jan 2016 - Feb 2020',
      description: 'Defined workflow and analytics for a secure banking platform, driving AU $295M in revenue and acquiring 163K new customers. Partnered with product and client stakeholders in healthcare and financial industry (J&J, Medicaid Enterprise Systems, Eli Lilly, and ING) to define success metrics and build ETL pipelines and dashboards.'
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
