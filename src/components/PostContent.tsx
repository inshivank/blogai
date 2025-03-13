
import React, { useEffect } from 'react';
import { Post } from '../types/blog';
import { marked } from 'marked';
import { motion } from 'framer-motion';

interface PostContentProps {
  post: Post;
}

const PostContent: React.FC<PostContentProps> = ({ post }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post.id]);

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-3xl"
    >
      <header className="mb-8 text-center md:mb-12">
        <motion.h1 
          className="heading-xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {post.title}
        </motion.h1>
        <motion.div 
          className="text-blog-muted flex justify-center space-x-4 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <time dateTime={post.publishedAt}>{post.publishedAt}</time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </motion.div>
      </header>
      <motion.div 
        className="prose mx-auto lg:prose-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        dangerouslySetInnerHTML={{ __html: marked(post.content) }}
      />
    </motion.article>
  );
};

export default PostContent;
