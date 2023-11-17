import React from "react";
import "./Portfolio.css";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className="port-body">
      <div className="port-wrapper">
        <section className="projects">
          <h1>Projects?</h1>
          <div className="projects-wrapper">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="project"
            >
              <div className="projpic-wrapper">
                <div className="projpic"></div>
              </div>

              <p>text</p>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="project"
            >
              <div className="projpic-wrapper">
                <div className="projpic"></div>
              </div>

              <p>text</p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
