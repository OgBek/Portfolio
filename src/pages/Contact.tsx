import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from '@formspree/react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub, FiCheckCircle, FiAlertTriangle } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  // Replace 'yourFormspreeFormId' with your real Formspree form ID
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID as string);
  const formRef = useRef<HTMLFormElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset();
      setShowSuccess(true);
      const timer = setTimeout(() => setShowSuccess(false), 5000); // Hide after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  useEffect(() => {
    if (state.errors) {
      setShowError(true);
      const timer = setTimeout(() => setShowError(false), 5000); // Hide after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [state.errors]);

  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6 text-primary-500" />,
      title: 'Email Me',
      value: 'bbekam60@gmail.com',
      href: 'https://mail.google.com/mail/?view=cm&to=bbekam60@gmail.com',
      external: true
    },
    {
      icon: <FiPhone className="w-6 h-6 text-primary-500" />,
      title: 'Call Me',
      value: '+251972728887',
      href: 'tel:+251972728887'
    },
    {
      icon: <FiMapPin className="w-6 h-6 text-primary-500" />,
      title: 'Location',
      value: 'Addis Ababa, Ethiopia',
      href: 'https://maps.google.com'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub className="w-5 h-5" />,
      url: 'https://github.com/OgBek'
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/in/bekam-beyene'
    },
    {
      name: 'Telegram',
      icon: <FaTelegramPlane className="w-5 h-5" />,
      url: 'https://t.me/Ur_Og'
    },
    {
      name: 'Email',
      icon: <FiMail className="w-5 h-5" />,
      url: 'https://mail.google.com/mail/?view=cm&to=bbekam60@gmail.com',
      external: true
    }
  ];

  return (
    <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Background SVG Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 opacity-10 dark:opacity-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          {/* Paper Plane */}
          <motion.path
            d="M20 100 L180 20 L120 180 Z"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="absolute bottom-10 right-10 w-48 h-48 opacity-10 dark:opacity-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          {/* Envelope */}
          <motion.path
            d="M20 40 L180 40 L180 160 L20 160 Z M20 40 L100 110 L180 40"
            fill="none"
            stroke="#EC4899"
            strokeWidth="2"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
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
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to say hello? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-8 dark:text-white">Contact Information</h2>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 bg-primary-50 dark:bg-gray-700 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700 dark:text-gray-300">{item.title}</h3>
                    <a 
                      href={item.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold mb-6 dark:text-white">Send Me a Message</h2>
              

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g., John Doe"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g., john.doe@example.com"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="e.g., Project Inquiry"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="e.g., Hi, I'd like to talk about..."
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-primary-500 text-white font-semibold rounded-lg shadow-md hover:bg-primary-600 dark:hover:bg-primary-600 transition-colors flex items-center justify-center gap-2 text-lg"
                  disabled={state.submitting}
                >
                  {state.submitting ? (
                    <>
                      <FiSend className="w-5 h-5 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" /> Send Message
                    </>
                  )}
                </button>
                <AnimatePresence>
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10, transition: { duration: 0.3 } }}
                      className="flex items-center justify-center gap-2 p-3 mt-4 text-sm font-medium text-green-800 bg-green-100 rounded-lg dark:bg-green-900 dark:text-green-200"
                    >
                      <FiCheckCircle className="w-5 h-5" />
                      <span>Your message has been sent successfully! I'll get back to you soon.</span>
                    </motion.div>
                  )}
                  {showError && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10, transition: { duration: 0.3 } }}
                      className="flex items-center justify-center gap-2 p-3 mt-4 text-sm font-medium text-red-800 bg-red-100 rounded-lg dark:bg-red-900 dark:text-red-200"
                    >
                      <FiAlertTriangle className="w-5 h-5" />
                      <span>Something went wrong. Please check your input and try again.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div 
          className="mt-20 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1602367819365!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ5JzI5LjYiTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Location Map"
            className="w-full h-full min-h-[300px]"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
