
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t border-blog-light py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center text-blog-muted text-sm">
          <p>© {currentYear} Minimal Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
