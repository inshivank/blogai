
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const Write: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      toast.error('Please fill in all fields');
      return;
    }
    
    // In a real application, this would save to a database
    // For now, we'll just show a success message and redirect
    toast.success('Post created successfully!');
    setTimeout(() => navigate('/'), 1500);
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="heading-lg mb-8 text-center">Write a New Post</h1>
        
        <motion.form 
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <div className="space-y-2">
            <label htmlFor="title" className="block text-blog-dark font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-blog-light focus:border-blog-accent focus:ring-1 focus:ring-blog-accent outline-none transition-all"
              placeholder="Enter your post title"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="content" className="block text-blog-dark font-medium">
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-blog-light focus:border-blog-accent focus:ring-1 focus:ring-blog-accent outline-none transition-all min-h-[300px]"
              placeholder="Write your post here (Markdown supported)"
            />
            <p className="text-sm text-blog-muted">Markdown formatting is supported.</p>
          </div>
          
          <div className="flex justify-end pt-4">
            <motion.button
              type="submit"
              className="px-6 py-3 bg-blog-accent text-white rounded-md transition-all hover:bg-blog-accent/90 hover:shadow-md font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Publish Post
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </Layout>
  );
};

export default Write;
