import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiMail, FiGithub, FiLinkedin, FiCode, FiDribbble } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';
import { FaTelegramPlane } from 'react-icons/fa';
import profilePhoto from '../assets/pro3.jpg';
import schoolImage from '../assets/school.png';
import libraryImage from '../assets/library.png';
import fleetImage from '../assets/fleet.png';


// TypeWriter Component
interface TypeWriterProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  delay = 1000 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? deleteSpeed : speed;
    const currentText = texts[currentIndex % texts.length];
    
    if (!isPaused) {
      if (!isDeleting && charIndex < currentText.length) {
        // Typing
        const timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typeSpeed);
        return () => clearTimeout(timeout);
      } else if (!isDeleting && charIndex === currentText.length) {
        // Pause at the end of typing
        const timeout = setTimeout(() => {
          setIsPaused(true);
          setTimeout(() => {
            setIsDeleting(true);
            setIsPaused(false);
          }, delay);
        }, 500);
        return () => clearTimeout(timeout);
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        const timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, typeSpeed / 2);
        return () => clearTimeout(timeout);
      } else if (isDeleting && charIndex === 0) {
        // Move to next text
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }
    }
  }, [charIndex, currentIndex, isDeleting, isPaused, texts, speed, deleteSpeed, delay]);

  return (
    <span className="relative">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Home = () => {
  const decorativeIcons = [
    { icon: FiGithub, top: '20%', left: '15%', size: 'w-8 h-8' },
    { icon: FiLinkedin, top: '80%', left: '10%', size: 'w-6 h-6' },
    { icon: FaTelegramPlane, top: '15%', right: '15%', size: 'w-7 h-7' },
    { icon: FiCode, top: '50%', right: '10%', size: 'w-8 h-8' },
    { icon: FiDribbble, top: '75%', right: '20%', size: 'w-6 h-6' },
  ];

  const frameworkNames = [
    { name: 'React', top: '25%', left: '5%', fontSize: '1.5rem' },
    { name: 'Next.js', top: '60%', right: '5%', fontSize: '1.2rem' },
    { name: 'Node.js', top: '85%', left: '20%', fontSize: '1.5rem' },
    { name: 'Tailwind CSS', top: '10%', right: '25%', fontSize: '1.3rem' },
    { name: 'MySql', top: '70%', left: '12%', fontSize: '1.4rem' },
    { name: 'Framer Motion', top: '88%', right: '10%', fontSize: '1.3rem' },
    { name: 'Laravel', top: '45%', right: '25%', fontSize: '1.5rem' },
    { name: 'MongoDB', top: '35%', right: '30%', fontSize: '1.4rem' },
  ];

  const svgPaths = [
    { d: 'M10 80 Q 95 10 180 80', top: '10%', left: '10%', rotate: 15 },
    { d: 'M10 10 C 50 100, 150 100, 190 10', top: '80%', right: '15%', rotate: -10 },
    { d: 'M20 20 L180 180', top: '50%', left: '45%', rotate: 45 },
    { d: 'M10 100 C 50 20, 150 180, 190 100', top: '30%', right: '5%', rotate: 0 },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
        <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-dots.png')] dark:opacity-50"></div>
        </div>

        {/* Decorative Social Icons */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {decorativeIcons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="absolute text-gray-400 dark:text-gray-600"
                style={{
                  top: item.top,
                  left: item.left,
                  right: item.right,
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 0.3, y: 0 }}
                transition={{
                  duration: 1.5,
                  delay: 1 + index * 0.2,
                  ease: 'easeOut'
                }}
              >
                <Icon className={item.size} />
              </motion.div>
            );
          })}

          {frameworkNames.map((framework, index) => (
            <motion.div
              key={framework.name}
              className="absolute font-mono font-bold text-gray-400 dark:text-gray-600"
              style={{
                top: framework.top,
                left: framework.left,
                right: framework.right,
                fontSize: framework.fontSize,
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 0.15,
                y: 0,
                x: [0, Math.random() * 20 - 10, 0],
              }}
              transition={{
                duration: 2,
                delay: 1.5 + index * 0.2,
                ease: 'easeOut',
                repeat: Infinity,
                repeatType: 'reverse',
                repeatDelay: 5,
              }}
            >
              {framework.name}
            </motion.div>
          ))}

          {svgPaths.map((path, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{ top: path.top, left: path.left, right: path.right, rotate: path.rotate }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 2, delay: 2 + index * 0.3 }}
            >
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d={path.d}
                  stroke="#9CA3AF" /* gray-400 */
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 2.2 + index * 0.3 }}
                />
              </svg>
            </motion.div>
          ))}
        </div>
        
        {/* Decorative Graphics */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-full max-w-2xl opacity-70 dark:opacity-30">
          <motion.div 
            className="absolute left-0 top-1/4 w-full h-64"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* Abstract shape 1 */}
              <motion.path
                d="M100,100 C150,50 200,150 250,100 S350,150 400,100"
                fill="none"
                stroke="url(#gradient1)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, pathOffset: 1 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              
              {/* Abstract shape 2 */}
              <motion.circle
                cx="150"
                cy="200"
                r="40"
                fill="none"
                stroke="url(#gradient2)"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
              
              {/* Abstract shape 3 */}
              <motion.rect
                x="50"
                y="250"
                width="80"
                height="80"
                rx="10"
                fill="none"
                stroke="url(#gradient3)"
                strokeWidth="2"
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
              
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EC4899" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
          
          {/* Floating code elements */}
          <div className="absolute left-20 top-1/3 text-xs font-mono text-gray-600 dark:text-gray-400">
            <motion.div 
              className="mb-4 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md w-40"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="text-primary-600 dark:text-primary-400">function</div>
              <div className="ml-4">createPortfolio() {'{'}</div>
              <div className="ml-6">return "Awesome Portfolio"</div>
              <div>{'}'}</div>
            </motion.div>
            
            <motion.div 
              className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md w-48 ml-10"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="text-primary-600 dark:text-primary-400">const</div>
              <div>skills = [</div>
              <div className="ml-4">'React', 'TypeScript',</div>
              <div className="ml-4">'Node.js', 'Three.js'</div>
              <div>]</div>
            </motion.div>
          </div>
        </div>
        
        {/* Right Side Decorative Graphics */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full max-w-2xl opacity-70 dark:opacity-30">
          <motion.div 
            className="absolute right-0 top-1/3 w-full h-64"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* Abstract shape 4 - Triangle */}
              <motion.polygon
                points="200,50 300,250 100,250"
                fill="none"
                stroke="url(#gradient4)"
                strokeWidth="2"
                initial={{ pathLength: 0, pathOffset: 1 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
              />
              
              {/* Abstract shape 5 - Dotted circle */}
              <motion.circle
                cx="250"
                cy="150"
                r="60"
                fill="none"
                stroke="url(#gradient5)"
                strokeWidth="2"
                strokeDasharray="4 4"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
              />
              
              {/* Abstract shape 6 - Zigzag line */}
              <motion.path
                d="M50,300 L100,250 L150,300 L200,250 L250,300 L300,250 L350,300"
                fill="none"
                stroke="url(#gradient6)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, pathOffset: 1 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                transition={{ duration: 1.8, ease: "easeInOut", delay: 0.9 }}
              />
              
              <defs>
                <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
                <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
                <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
          
          {/* Right Side Floating Code Elements */}
          <div className="absolute right-20 top-1/4 text-xs font-mono text-gray-600 dark:text-gray-400 text-right">
            <motion.div 
              className="mb-4 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md w-48 ml-auto"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="text-primary-600 dark:text-primary-400">const</div>
              <div>techStack = {'{'}</div>
              <div className="ml-4">frontend: 'React',</div>
              <div className="ml-4">backend: 'Node.js',</div>
              <div className="ml-4">styling: 'Tailwind CSS'</div>
              <div>{'}'}</div>
            </motion.div>
            
            <motion.div 
              className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md w-40 mr-10"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="text-primary-600 dark:text-primary-400">function</div>
              <div>buildPortfolio() {'{'}</div>
              <div className="ml-4">return {'{'}</div>
              <div className="ml-6">design: 'Modern',</div>
              <div className="ml-6">animations: true,</div>
              <div className="ml-6">responsive: true</div>
              <div className="ml-4">{'}'}</div>
              <div>{'}'}</div>
            </motion.div>
            
            <motion.div 
              className="mt-4 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md w-52 ml-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <div className="text-primary-600 dark:text-primary-400">// Get in touch</div>
              <div>const email = 'bbekam60@gmail.com'</div>
              <div>const social = {'{'}</div>
              <div className="ml-4">github: 'OgBek',</div>
              <div className="ml-4">linkedin: 'in/bekam-beyene'</div>
              <div>{'}'}</div>
            </motion.div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-xl md:text-2xl font-medium text-primary-600 dark:text-primary-400 mb-4 tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              BEKAM BEYENE
            </motion.h1>
            
            <motion.div 
              className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed min-h-[120px] md:min-h-[100px] flex items-center justify-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div>
                I'm a{' '}
                <span className="font-mono">
                  <TypeAnimation
                    sequence={[
                      'Web Developer.',
                      2000,
                      'Fullstack Developer.',
                      2000,
                      'Network Engineer.',
                      2000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    className="text-primary-600 dark:text-primary-400"
                  />
                </span>
                <br />
                who builds exceptional digital experiences
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link 
                to="/projects" 
                className="px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 dark:hover:bg-primary-600 transition-colors flex items-center gap-2 shadow-md"
              >
                View My Work
                <FiArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/contact" 
                className="px-6 py-3 border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-white dark:hover:bg-opacity-10 transition-colors"
              >
                Contact Me
              </Link>
            </motion.div>
            
            <motion.div 
              className="flex justify-center mt-12 space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <a href="https://github.com/OgBek" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white transition-colors">
                <FiGithub className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/bekam-beyene" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white transition-colors">
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a href="https://t.me/Ur_Og" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white transition-colors">
                <FaTelegramPlane className="w-6 h-6" />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&to=bbekam60@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white transition-colors">
                <FiMail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <a href="#about" className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden">
        {/* Dotted Circle Animation */}
        <div className="absolute top-1/4 right-1/4 w-36 h-36 opacity-20 dark:opacity-10 -z-1">
          <motion.svg viewBox="0 0 100 100" className="w-full h-full">
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="2"
              strokeDasharray="0.1 6"
              strokeLinecap="round"
              initial={{ rotate: 0, pathLength: 0 }}
              animate={{ 
                rotate: 360,
                pathLength: 1,
                strokeDashoffset: [0, 100]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "linear"
              }}
            />
          </motion.svg>
        </div>

        {/* Pulsing Circle */}
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 opacity-20 dark:opacity-10 -z-1">
          <motion.svg viewBox="0 0 100 100" className="w-full h-full">
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2"
              initial={{ scale: 0.5, opacity: 0.5 }}
              animate={{ 
                scale: 1.5,
                opacity: 0.2
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </motion.svg>
        </div>

        {/* Wavy Line */}
        <div className="absolute top-1/3 left-1/2 w-64 h-32 opacity-20 dark:opacity-10 -z-1">
          <motion.svg viewBox="0 0 200 100" className="w-full h-full">
            <motion.path
              d="M10,50 Q50,10 90,50 T170,50"
              fill="none"
              stroke="#10B981"
              strokeWidth="2"
              strokeDasharray="0 1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "linear"
              }}
            />
          </motion.svg>
        </div>

        {/* Rotating Square */}
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 opacity-20 dark:opacity-10 -z-1">
          <motion.svg viewBox="0 0 100 100" className="w-full h-full">
            <motion.rect
              x="20"
              y="20"
              width="60"
              height="60"
              fill="none"
              stroke="#EC4899"
              strokeWidth="2"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear"
              }}
            />
          </motion.svg>
        </div>

        {/* Original Decorative SVGs */}
        <div className="absolute bottom-10 left-1/3 w-44 h-44 opacity-10 dark:opacity-5 -z-1">
          <svg viewBox="0 0 176 176" className="w-full h-full">
            <motion.rect
              x="36" y="36" width="104" height="104" rx="20"
              fill="none"
              stroke="#34D399"
              strokeWidth="2"
              initial={{ rotate: -15, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.7 }}
            />
            <motion.path
              d="M20 88 Q88 20 156 88 T176 156"
              fill="none"
              stroke="#60A5FA"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, delay: 0.9 }}
            />
          </svg>
        </div>
        {/* Additional Decorative SVGs */}
        <div className="absolute top-1/2 left-1/4 w-40 h-40 opacity-10 dark:opacity-5 -z-1">
          <svg viewBox="0 0 160 160" className="w-full h-full">
            <motion.ellipse
              cx="80" cy="80" rx="60" ry="30"
              fill="none"
              stroke="#60A5FA"
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.5 }}
            />
            <motion.path
              d="M20 80 Q80 10 140 80 T160 140"
              fill="none"
              stroke="#818CF8"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6 }}
            />
          </svg>
        </div>
        {/* Background SVG Elements */}
        <div className="absolute top-20 -left-20 w-64 h-64 opacity-10 dark:opacity-5">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <motion.path
              d="M20,100 Q50,40 100,50 T180,100"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />
            <motion.circle
              cx="100"
              cy="100"
              r="30"
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </svg>
        </div>
        
        <div className="absolute bottom-10 right-0 w-48 h-48 opacity-10 dark:opacity-5">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <motion.rect
              x="50"
              y="50"
              width="100"
              height="100"
              rx="10"
              fill="none"
              stroke="#EC4899"
              strokeWidth="2"
              initial={{ rotate: -15, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
            />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 dark:text-white text-center">About Me</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
              {/* Photo Section */}
              <motion.div 
                className="w-full lg:w-1/3 flex-shrink-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-blue-500 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-200"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-1">
                    <div className="overflow-hidden rounded-xl">
                      <img 
                        src= {profilePhoto} 
                        alt="Profile Photo" 
                        className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=634&q=80';
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* About Content */}
              <motion.div 
                className="flex-1"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl font-semibold mb-4 dark:text-gray-100">Hello, I'm Bekam Beyene</h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    I'm a passionate developer with expertise in creating beautiful, functional, and user-centered digital experiences. 
                    With a strong foundation in both design and development, I bring ideas to life in the browser.
                  </p>
                  <p>
                    My journey in technology has equipped me with a diverse set of skills, from frontend development to network engineering, 
                    allowing me to approach problems from multiple perspectives and deliver comprehensive solutions.
                  </p>
                  <div className="pt-4">
                    <Link 
                      to="/about" 
                      className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors group"
                    >
                      <span>Learn More About Me</span>
                      <FiArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        {/* Rotating Hexagon */}
        <div className="absolute top-20 right-1/4 w-32 h-32 opacity-10 dark:opacity-5 -z-1">
          <motion.svg viewBox="0 0 100 100" className="w-full h-full">
            <motion.polygon
              points="50,5 90,30 90,70 50,95 10,70 10,30"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="1.5"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear"
              }}
            />
          </motion.svg>
        </div>

        {/* Pulsing Dot Grid */}
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 opacity-10 dark:opacity-5 -z-1">
          <motion.svg viewBox="0 0 100 100" className="w-full h-full">
            {Array.from({ length: 5 }).map((_, i) => (
              Array.from({ length: 5 }).map((_, j) => (
                <motion.circle
                  key={`${i}-${j}`}
                  cx={20 + i * 20}
                  cy={20 + j * 20}
                  r="2"
                  fill="#10B981"
                  initial={{ scale: 0.5, opacity: 0.5 }}
                  animate={{ 
                    scale: [0.5, 1.5, 0.5],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: (i + j) * 0.1,
                    ease: "easeInOut"
                  }}
                />
              ))
            ))}
          </motion.svg>
        </div>

        {/* Wavy Line */}
        <div className="absolute top-1/3 right-10 w-48 h-32 opacity-10 dark:opacity-5 -z-1">
          <motion.svg viewBox="0 0 200 100" className="w-full h-full">
            <motion.path
              d="M10,50 C30,10 70,90 90,50 S150,10 170,50"
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="1.5"
              strokeDasharray="0 1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "linear"
              }}
            />
          </motion.svg>
        </div>
        {/* Background SVG Elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 opacity-10 dark:opacity-5">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <motion.path
              d="M30,30 L170,30 L170,170 L30,170 Z"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeDasharray="8 4"
              initial={{ pathLength: 0, rotate: 0 }}
              whileInView={{ pathLength: 1, rotate: 5 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            />
          </svg>
        </div>
        
        <div className="absolute bottom-20 left-0 w-48 h-48 opacity-10 dark:opacity-5">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <motion.path
              d="M100,20 C150,50 150,150 100,180 C50,150 50,50 100,20 Z"
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <h2 className="text-3xl font-bold dark:text-white mb-4 md:mb-0">Featured Projects</h2>
              <Link 
                to="/projects" 
                className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
              >
                View All Projects
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {         id: 1,
                  title: 'school managment system',
                  description: 'A full-stack school managment system with user authentication, course management',
                   tags: ['Laravel', 'PHP', 'Xampp', 'AdminLte templet', 'spatie','sanctum'],
                   image:schoolImage,
                  link: 'https://github.com/OgBek/school-managment-system-laravel-11'
                },
                {
                  id: 2,
                  title: 'simple library system',
                  description: 'A modern simple crud library system.',
                  tags: ['React', 'MariaDB', 'Frappe', 'Tailwind CSS'],
                  image: libraryImage,
                  link: 'https://drive.google.com/file/d/1iK130zZISPzUHcZNDvLBimLcVUaMolHU/view?usp=drive_link'
                },
                {
                  id: 3,
                  title: 'Fleet Management system',
                  description: 'A vehicle fleet management system with real-time updates.',
                  tags: ['Laravel', 'Mysql', 'blade', 'Tailwind CSS'],
                  image: fleetImage,
                  link: 'https://github.com/OgBek/FLEET-MANAGEMENT'
                }
              ].map((project, index) => (
                <motion.div 
                  key={project.id}
                  className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-xs text-gray-700 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 font-medium hover:underline inline-flex items-center gap-1"
                    >
                      View Project
                      <FiArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="relative py-16 bg-gradient-to-r from-primary-600 to-blue-600 text-white overflow-hidden">
        {/* Dotted Circle Animation */}
        <div className="absolute top-20 left-1/4 w-40 h-40 opacity-20">
          <motion.svg viewBox="0 0 100 100" className="w-full h-full">
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1.5"
              strokeDasharray="0.1 6"
              strokeLinecap="round"
              initial={{ rotate: 0, pathLength: 0 }}
              animate={{ 
                rotate: 360,
                pathLength: 1,
                strokeDashoffset: [0, 100]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "linear"
              }}
            />
          </motion.svg>
        </div>

        {/* Floating Square */}
        <div className="absolute top-1/3 right-1/4 w-24 h-24 opacity-20">
          <motion.svg viewBox="0 0 100 100" className="w-full h-full">
            <motion.rect
              x="20"
              y="20"
              width="60"
              height="60"
              fill="none"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1.5"
              initial={{ y: 0, opacity: 0.5 }}
              animate={{ 
                y: [0, -15, 0],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
            />
          </motion.svg>
        </div>

        {/* Pulsing Triangle */}
        <div className="absolute bottom-10 right-1/4 w-32 h-32 opacity-20">
          <motion.svg viewBox="0 0 100 100" className="w-full h-full">
            <motion.polygon
              points="50,10 90,90 10,90"
              fill="none"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1.5"
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ 
                scale: [0.8, 1.2, 0.8],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
            />
          </motion.svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-sm font-medium text-blue-100 mb-2 block">LET'S WORK TOGETHER</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Have a project in mind?</h2>
            <p className="text-blue-100/90 mb-8 max-w-2xl mx-auto">
              I'm currently available for freelance and on-site work. Let's discuss how I can help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link 
                to="/contact" 
                className="group relative px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Get In Touch
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 hover:border-white/50"
              >
                <span>View My Work</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Floating Elements Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary-400 dark:bg-primary-600 opacity-10"
            style={{
              width: Math.random() * 20 + 5 + 'px',
              height: Math.random() * 20 + 5 + 'px',
              left: Math.random() * 100 + 'vw',
              top: Math.random() * 100 + 'vh',
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
