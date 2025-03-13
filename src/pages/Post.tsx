
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import PostContent from '../components/PostContent';
import { getPostById } from '../data/posts';
import { motion } from 'framer-motion';

const Post: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = getPostById(id || '');

  if (!post) {
    navigate('/');
    return null;
  }

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <PostContent post={post} />
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center text-blog-accent hover:text-blog-accent/80 transition-colors"
          >
            <svg 
              className="mr-2 w-4 h-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all posts
          </button>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Post;
