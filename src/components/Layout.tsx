
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <motion.main 
        className="flex-grow mx-auto w-full max-w-4xl px-4 py-8 md:py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
