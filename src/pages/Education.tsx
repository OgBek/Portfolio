import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiAward, FiBookOpen, FiExternalLink } from 'react-icons/fi';
import cvFile from '../assets/bekam-beyene-cv.pdf';

const Education = () => {
  // Sample education data - replace with your actual education
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Dilla University',
      year: '2021 - 2025',
      description: 'Focus on Web Development and Software Architecture',
      icon: <FiBookOpen className="w-6 h-6 text-primary-500" />
    },
  ];

  // Sample certificates - replace with your actual certificates
  const certificates = [
    {
      title: 'Programming Fundamentals',
      issuer: 'udacity',
      year: '2025',
      credential: 'Udacity Certificate',
      link: 'https://drive.google.com/file/d/1zsmVEYKZCcFIz8XVFQZpLM2BlSGXDZ1L/view?usp=drive_link'
    },
    {
      title: 'Android Developer Fundamentals',
      issuer: 'udacity',
      year: '2025',
      credential: 'udacity Certificate',
      link: 'https://drive.google.com/file/d/10CxofE7YNmJS7lpVW-QluxEJckEvEZL_/view?usp=drive_link'
    },
    {
      title: 'Certificate of Achievement',
      issuer: 'Dilla University',
      year: '2025',
      credential: 'dilla University Certificate',
      link: 'https://drive.google.com/file/d/1-ikCnlcdXACFVVq5XxaqChT8l5LMPhZo/view?usp=drive_link'
    },
  ];

  // CV download handler
  const handleDownloadCV = () => {
    // Replace with your actual CV file path
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Bekam Beyene-CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Background SVG Elements */}
      <div className="absolute top-10 left-10 w-48 h-48 opacity-10 dark:opacity-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          {/* Graduation Cap */}
          <motion.path
            d="M20 100 L100 60 L180 100 L100 140 Z M40 105 L40 130 L100 160 L160 130 L160 105"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="absolute bottom-20 right-20 w-64 h-64 opacity-10 dark:opacity-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          {/* Open Book */}
          <motion.path
            d="M100 20 C 60 20, 20 60, 20 100 S 60 180, 100 180 M100 20 C 140 20, 180 60, 180 100 S 140 180, 100 180"
            fill="none"
            stroke="#EC4899"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Education & Certifications</h1>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic background and professional certifications that have shaped my career.
          </p>
        </motion.div>

        {/* CV Download Section */}
        <motion.div 
          className="bg-gradient-to-r from-primary-500 to-blue-500 rounded-2xl p-8 text-white mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">Download My CV</h2>
              <p className="opacity-90">Get a detailed overview of my professional journey and skills.</p>
            </div>
            <button 
              onClick={handleDownloadCV}
              className="mt-4 md:mt-0 bg-white text-primary-600 px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-opacity-90 transition-colors"
            >
              <FiDownload className="w-5 h-5" />
              Download CV
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 dark:text-white">
              <FiBookOpen className="text-primary-500" />
              Education
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
              
              {education.map((edu, index) => (
                <div key={index} className="relative pl-16 mb-10 group">
                  {/* Timeline dot */}
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-4 border-primary-500 flex items-center justify-center group-hover:bg-primary-100 dark:group-hover:bg-gray-700 transition-colors">
                    {edu.icon}
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <span className="text-sm text-primary-500 font-medium">{edu.year}</span>
                    <h3 className="text-xl font-semibold mt-1 mb-2 dark:text-white">{edu.degree}</h3>
                    <h4 className="text-lg text-gray-700 dark:text-gray-300 font-medium">{edu.institution}</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 dark:text-white">
              <FiAward className="text-primary-500" />
              Certifications
            </h2>
            
            <div className="space-y-6">
              {certificates.map((cert, index) => (
                <motion.div 
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold dark:text-white">{cert.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">{cert.issuer} • {cert.year}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">Credential: {cert.credential}</p>
                    </div>
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                      aria-label={`View ${cert.title} certificate`}
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Skills Section */}
            <motion.div 
              className="mt-12 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Additional Training</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">currently learning Agile dev </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">currently learning DevOps Fundamentals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">currently learning CI/CD,Docker and AWS</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education;
