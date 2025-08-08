import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Bekam Beyene. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/OgBek" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/bekam-beyene" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://t.me/Ur_Og" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              aria-label="Telegram"
            >
              <FaTelegramPlane className="w-5 h-5" />
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&to=bbekam60@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </div>
          
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-6">
              <Link 
                to="/about" 
                className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              >
                About
              </Link>
              <Link 
                to="/projects" 
                className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              >
                Projects
              </Link>
              <Link 
                to="/education" 
                className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              >
                Education
              </Link>
              <Link 
                to="/contact" 
                className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
