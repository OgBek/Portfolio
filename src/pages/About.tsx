import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBriefcase, FiCode } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const About = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Next.js',
    'Laravel', 'Tailwind CSS', 'MySql', 'MongoDB', 'firbase',
    'spring boot', 'Python', 'Git', 'html', 'css','RESTful APIs', 
    'GraphQL', 'Docker', 'AWS', 'Agile Methodologies',
    'UI/UX Design', 'Responsive Design', 'Testing & Debugging',
    'CI/CD', 'web security', 'web performance'
  ]
  const experience = [
    {
      role: 'Full  Stack Developer',
      company: 'By My self',
      period: '2025 - Present',
      description: 'building web apps and learning  new frameworks and dev tools.'
    },
    {
      role: 'Internship program in Full Stack web Developement',
      company: 'Farka Ict Solutions Inc',
      period: '2024 - 2024',
      description: 'Developed and maintained web applications using modern laravel php framework.'
    },
  ];

  return (
    <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Background SVG Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20 dark:opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <motion.circle
            cx="50"
            cy="50"
            r="80"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
        </svg>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10 dark:opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <motion.rect
            x="20" y="20" width="160" height="160" rx="20"
            fill="none"
            stroke="#10B981"
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-80 h-80 opacity-20 dark:opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <motion.path
            d="M150,20 L180,180 L20,180 Z"
            fill="none"
            stroke="#EC4899"
            strokeWidth="2"
            initial={{ pathLength: 0, rotate: 15 }}
            whileInView={{ pathLength: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
          />
        </svg>
      </div>
      <div className="absolute top-1/4 right-10 w-48 h-48 opacity-20 dark:opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <motion.path
            d="M20,100 C40,20 160,20 180,100 S160,180 120,180"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.4 }}
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer with expertise in creating beautiful, functional, and user-centered digital experiences. 
            With a strong foundation in both design and development, I bring ideas to life in the browser.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4 mx-auto">
              <FiCode className="w-8 h-8 text-primary-600 dark:text-primary-300" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 dark:text-white">Web Development</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Building responsive and performant web applications with modern technologies.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4 mx-auto">
              <FiBriefcase className="w-8 h-8 text-primary-600 dark:text-primary-300" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 dark:text-white">Experience</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              {experience.length}+ years of professional experience in software development.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4 mx-auto">
              <FiAward className="w-8 h-8 text-primary-600 dark:text-primary-300" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 dark:text-white">Achievements</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Delivered 2+ successful projects for clients worldwide.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6 dark:text-white">My Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-md hover:shadow-lg transition-shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Experience</h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary-500">
                  <div className="absolute -left-2.5 top-0 w-4 h-4 rounded-full bg-primary-500"></div>
                  <h3 className="text-lg font-semibold dark:text-white">{exp.role}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{exp.company} • {exp.period}</p>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 bg-gradient-to-r from-primary-500 to-blue-500 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-4">Let's work together!</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            I'm always open to discussing product design work or partnership opportunities.
          </p>
          <Link
            to="/contact" 
            className="inline-block bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
