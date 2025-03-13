
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header 
      className={`sticky top-0 z-10 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/80 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 py-5 max-w-4xl flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight text-blog-dark transition-colors hover:text-blog-accent">
          Minimal Blog
        </Link>
        <nav>
          <motion.ul 
            className="flex space-x-6 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, staggerChildren: 0.1 }}
          >
            <motion.li 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/" className="text-blog-dark hover:text-blog-accent transition-colors">
                Home
              </Link>
            </motion.li>
            <motion.li 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <Link to="/write" className="px-4 py-2 bg-blog-accent text-white rounded-md transition-all hover:bg-blog-accent/90 hover:shadow-md">
                Write
              </Link>
            </motion.li>
          </motion.ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default NavBar;
