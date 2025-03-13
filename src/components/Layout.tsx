
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Header based on your HTML */}
      <div className="main-header-div">
        <div className="left-name">SHIVANK</div>
        <div className="center-title">THE BLOG</div>
        <div className="right-spacer">
          <Link to="/" className="home-link" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>
            Home
          </Link>
          <Link to="/family-friends" className="family-friends-link">
            Family & Friends
          </Link>
        </div>
      </div>
      
      {/* Content Section */}
      <motion.main 
        className="content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        {children}
      </motion.main>
      
      {/* Footer Section */}
      <div className="end">
        <h1 className="end-head">THIS IS THE END OF THE WORLD</h1>
        <div className="footer-date">Site launched: March 12, 2025</div>
      </div>
      
      {/* Adding your original script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          // Simple JavaScript to detect mobile devices and make adjustments
          document.addEventListener('DOMContentLoaded', function() {
            // Add class to body based on device type
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                document.body.classList.add('mobile-device');
            }
            
            // Handle post clicks
            const posts = document.querySelectorAll('.post');
            posts.forEach(post => {
                post.addEventListener('click', function() {
                    posts.forEach(p => p.classList.remove('active'));
                    this.classList.add('active');
                });
            });
          });
        `
      }} />
    </div>
  );
};

export default Layout;
