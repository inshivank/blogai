
import React from 'react';
import { motion } from 'framer-motion';

const Sidebar: React.FC = () => {
  return (
    <motion.div 
      className="w-48 bg-white border-r border-blog-light p-4 hidden md:block"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blog-dark">SHIVANK</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
