import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { GiMicrophone, GiBookshelf } from "react-icons/gi";
import { BsCodeSlash } from "react-icons/bs";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="home-body"
    >
      <div className="home-wrapper">
        <motion.section
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="hero"
        >
          <div className="home-pfp"></div>
          <div className="hero-txt-wrapper">
            <h1>Me?</h1>
            <p>
              <span className="word-frnt">Front-end</span> developer and avid
              fan of <span className="word-rap">Rap</span> music and{" "}
              <span className="word-hist">History</span>. Exploring the
              intersection of code and creativity. Join me on my digital
              journey!
            </p>
          </div>
        </motion.section>
        <motion.section
          className="graphs"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <a className="graph" href="#code">
            <BsCodeSlash className="graph-icon n1" />
            Code Stuff
          </a>
          <a className="graph" href="#rap">
            <GiMicrophone className="graph-icon n2" />
            Rap Music
          </a>
          <a className="graph">
            <GiBookshelf className="graph-icon n3" />
            History
          </a>
        </motion.section>
        <motion.section
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          id="code"
          className="tech-stack"
        >
          <div className="ts-wrapper">
            <div className="s-ts-wrapper">
              <h1>Tech Stack?</h1>
              <li>HTML / CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React.js</li>
              <li>Tailwind.css</li>
              <li>Vite.js</li>
              <li>Node.js</li>
            </div>

            <div className="s-ss-wrapper">
              <h1>Sub Stack?</h1>
              <li>F-Motion</li>
              <li>Chart.js</li>
              <li>Rest api</li>
              <li>Grammy.js</li>
            </div>
          </div>
        </motion.section>
        <section id="rap" className="rap">
          <h1>I Listen To?</h1>
          <div className="rap-wrapper">
            <div className="rapper em">
              <span>Eminem</span>
            </div>
            <div className="rapper cole">
              {" "}
              <span>J Cole</span>
            </div>
            <div className="rapper kdot">
              {" "}
              <span>K-Dot</span>
            </div>
            <div className="rapper nf">
              <span>NF </span>
            </div>
            <div className="rapper jid">
              {" "}
              <span>JID</span>
            </div>
            <div className="rapper pac">
              {" "}
              <span>Tupac</span>
            </div>
          </div>
        </section>
        <section></section>
      </div>
    </motion.div>
  );
};

export default Home;
