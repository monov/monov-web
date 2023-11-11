import React from "react";
import "./Portfolio.css";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className="port-body">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        className="text"
      >
        Portfolio
      </motion.div>
    </div>
  );
};

export default Portfolio;
