import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';
import schoolImage from '../assets/school.png';
import libraryImage from '../assets/library.png';
import fleetImage from '../assets/fleet.png';
import portfolio from '../assets/portfolio.png';

// Project data with more detailed information
const projects = [
  {
    id: 1,
    title: 'Fleet Management system',
    description: 'A vehicle fleet management system with real-time updates.',
    tags: ['Laravel', 'Mysql', 'vite','blade', 'Tailwind CSS'],
    image: fleetImage,
    github: 'https://github.com/OgBek/FLEET-MANAGEMENT',
    live: 'https://github.com/OgBek/FLEET-MANAGEMENT',
    category: 'fullstack',
    featured: true
  },
  {
    id: 2,
    title: 'simple library system',
    description: 'A modern simple crud library system.',
    tags: ['React','typescript' ,'MariaDB', 'Frappe', 'Tailwind CSS'],
    image: libraryImage,
    github: 'https://github.com/OgBek/library-management-system',
    live: 'https://drive.google.com/file/d/1iK130zZISPzUHcZNDvLBimLcVUaMolHU/view?usp=drive_link',
    category: 'backend',
    featured: true
  },
  {
    id: 3,
    title: 'portifolio Website',
    description: 'A modern portfolio website with 3D elements and smooth animations.',
    tags: ['React', 'Three.js', 'React Three Fiber', 'Tailwind CSS', 'Framer Motion'],
    image:portfolio,
    github: 'https://github.com/OgBek/Portfolio',
    live: 'https://bekam-beyene.vercel.app/',
    category: 'frontend',
    featured: true
  },
  {
    id: 4,
    title: 'School managment system',
    description: 'A full-stack school managment system with user authentication, course management, and  payment integration',
    tags: ['Laravel', 'PHP', 'Xampp', 'AdminLte templet', 'spatie','sanctum'],
    image: schoolImage,
    github: 'https://github.com/OgBek/school-managment-system-laravel-11',
    live: 'https://github.com/OgBek/school-managment-system-laravel-11',
    category: 'fullstack',
    featured: true
  }
  
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const projectsPerPage = 3;

  const categories = ['all', 'frontend','backend', 'fullstack', 'mobile', 'design'];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, searchQuery]);

  const handleFilter = (category: string) => {
    setAnimateCard({ y: 100, opacity: 0 });
    
    setTimeout(() => {
      setActiveFilter(category);
      setAnimateCard({ y: 0, opacity: 1 });
    }, 300);
  };

  return (
    <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Background SVG Elements */}
      <div className="absolute top-20 -left-20 w-48 h-48 opacity-10 dark:opacity-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M150 50 L100 13.397 L50 50 L50 150 L100 186.603 L150 150 Z"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="absolute bottom-10 right-10 w-64 h-64 opacity-10 dark:opacity-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <motion.rect
            x="20" y="20" width="160" height="160" rx="15"
            fill="none"
            stroke="#EC4899"
            strokeWidth="2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </svg>
      </div>

      <div className="absolute top-1/2 right-0 w-80 h-80 opacity-10 dark:opacity-5 -translate-y-1/2">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M20 20 C40 100, 160 100, 180 20"
            fill="none"
            stroke="#10B981"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.4 }}
          />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-7xl mx-auto z-10"
      >
        <h1 className="text-4xl font-bold text-center mb-4">My Projects</h1>
        <div className="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-12">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects..."
            className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          />
        </div>

        {/* Projects Grid */}
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-2 rounded-full hover:bg-primary-100 transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <FiGithub className="w-5 h-5 text-gray-800" />
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-2 rounded-full hover:bg-primary-100 transition-colors"
                    aria-label="Live Demo"
                  >
                    <FiExternalLink className="w-5 h-5 text-gray-800" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination - Only show if more than 3 projects */}
        {filteredProjects.length > projectsPerPage && (
          <div className="flex justify-center mt-12 space-x-2">
            {/* Previous button */}
            <button 
              className={`px-4 py-2 rounded-full flex items-center justify-center ${
                currentPage === 1 
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            
            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  page === currentPage
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            
            {/* Next button */}
            <button 
              className={`px-4 py-2 rounded-full flex items-center justify-center ${
                currentPage >= totalPages 
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage >= totalPages}
            >
              Next
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Projects;
