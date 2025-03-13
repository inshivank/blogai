
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Lock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

const PRIVATE_ACCESS_CODE = "1234"; // You should change this to your desired code

const FamilyFriends: React.FC = () => {
  const [accessCode, setAccessCode] = useState('');
  const [hasAccess, setHasAccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessCode === PRIVATE_ACCESS_CODE) {
      setHasAccess(true);
      toast({
        title: "Access granted",
        description: "Welcome to the private section!",
      });
    } else {
      toast({
        title: "Access denied",
        description: "Incorrect access code. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <section className="text-center mb-12">
          <motion.h1 
            className="heading-xl mb-6 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Lock className="inline-block" size={28} />
            Family & Friends
          </motion.h1>
          <motion.p 
            className="text-blog-muted body-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            This is a private section for family and friends only.
          </motion.p>
        </section>
        
        {!hasAccess ? (
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-sm border border-blog-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-xl font-medium mb-4">Enter Access Code</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  placeholder="Access Code"
                  className="w-full p-2 border border-blog-light rounded-md"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blog-accent text-white rounded-md transition-all hover:bg-blog-accent/90"
              >
                Access Private Content
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blog-light">
              <h2 className="text-xl font-medium mb-4">Private Posts</h2>
              <ul className="space-y-3">
                <li className="p-3 hover:bg-gray-50 rounded-md transition-colors">
                  <Link to="#" className="block">Family Vacation Photos - Summer 2023</Link>
                </li>
                <li className="p-3 hover:bg-gray-50 rounded-md transition-colors">
                  <Link to="#" className="block">Holiday Dinner Recipes</Link>
                </li>
                <li className="p-3 hover:bg-gray-50 rounded-md transition-colors">
                  <Link to="#" className="block">Birthday Party Plans</Link>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blog-light">
              <h2 className="text-xl font-medium mb-4">Contact Me</h2>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blog-accent hover:underline"
              >
                <MessageSquare size={20} />
                Message me on WhatsApp
              </a>
              <p className="mt-2 text-sm text-blog-muted">
                Feel free to reach out to me directly for any questions or updates.
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </Layout>
  );
};

export default FamilyFriends;
