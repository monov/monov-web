import React from "react";
import "./Portfolio.css";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className="port-body">
      <div className="port-wrapper">
        <section className="projects">
          <motion.h1
            initial={{  opacity: 0 }}
            animate={{  opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Projects?
          </motion.h1>
          <div className="projects-wrapper">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="project"
            >
              <div className="projpic-wrapper">
                <div className="projpic p1"></div>
              </div>
              <div className="p1-wrapper">
                🎓 Platform to Rate and Review Professors.
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="project"
            >
              <div className="projpic-wrapper">
                <div className="projpic p2"></div>
              </div>

              <div className="p2-wrapper">
                📟 CLI tool that logs a random quote
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
