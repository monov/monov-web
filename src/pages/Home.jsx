import React from "react";
import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home-body">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="home-pfp"
      >
        Photo
      </motion.div>
    </div>
  );
};

export default Home;
