import React from "react";
import "./Blog.css";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <div className="blog-body">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        className="text"
      >
        No posts yet...
      </motion.div>
    </div>
  );
};

export default Blog;
