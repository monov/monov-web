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
            <motion.a
              href="https://rate-my-professor-alpha.vercel.app "
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="project"
            >
              <div className="projpic-wrapper">
                <div className="projpic p1"></div>
              </div>
              <div className="p1-wrapper">
                🎓 Platform to Review Professors.
              </div>
            </motion.a>

            <motion.a
              href="https://github.com/monov/awesome-sakhib"
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
            </motion.a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
