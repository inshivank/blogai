
import React from 'react';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import { posts } from '../data/posts';
import { motion } from 'framer-motion';

const Index: React.FC = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section className="text-center mb-16">
          <motion.h1 
            className="heading-xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Minimal Blog
          </motion.h1>
          <motion.p 
            className="text-blog-muted body-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A simple space for thoughts and ideas
          </motion.p>
        </section>
        
        <section>
          {posts.map((post, index) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </section>
      </motion.div>
    </Layout>
  );
};

export default Index;
