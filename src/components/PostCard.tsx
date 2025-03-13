
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types/blog';
import { motion } from 'framer-motion';

interface PostCardProps {
  post: Post;
  index?: number;
}

const PostCard: React.FC<PostCardProps> = ({ post, index = 0 }) => {
  return (
    <motion.article 
      className="mb-12 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1.0]
      }}
    >
      <Link to={`/post/${post.id}`} className="block group">
        <h2 className="heading-md group-hover:text-blog-accent transition-colors duration-300 mb-2">
          {post.title}
        </h2>
        <div className="text-blog-muted text-sm mb-3 flex items-center space-x-3">
          <span>{post.publishedAt}</span>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
        <p className="text-blog-dark/90 body-md mb-4">
          {post.excerpt}
        </p>
        <div className="inline-flex items-center text-blog-accent font-medium group-hover:translate-x-1 transition-transform duration-300">
          Read more
          <svg 
            className="ml-1 w-4 h-4 group-hover:ml-2 transition-all duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </Link>
    </motion.article>
  );
};

export default PostCard;
