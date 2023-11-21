import { Link } from "react-router-dom";
import "./Navbar.css";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = ({ setActive, active, hamActive, setHamActive }) => {
  const handleClick = (act) => {
    setActive(act);
  };
  

  const hamClick = () => {
    setHamActive((v) => !v);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="navbar"
    >
      <div className="navbar-buttons-wrapper">
        <Link
          to="/portfolio"
          onClick={() => {
            handleClick("/portfolio");
          }}
          className={`navbar-button ${active === "/portfolio" ? "active" : ""}`}
        >
          Portfolio
        </Link>
        <Link
          to="/"
          onClick={() => {
            handleClick("/");
          }}
          className={`navbar-button ${active === "/" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="blog"
          onClick={() => {
            handleClick("/blog");
          }}
          className={`navbar-button ${active === "/blog" ? "active" : ""}`}
        >
          Blog
        </Link>
      </div>
      <div className={`hamburger ${hamActive ? "active" : ""}`}>
        <div onClick={hamClick} className="hamburger-in"></div>
        <motion.div
          key={hamActive}
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`menu-wrapper ${hamActive ? "active" : ""}`}
        >
          <Link
            onClick={() => {
              setHamActive(false);
            }}
            to="/"
            className={`menu ${hamActive ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            onClick={() => {
              setHamActive(false);
            }}
            to="/portfolio"
            className={`menu ${hamActive ? "active" : ""}`}
          >
            Portofolio
          </Link>
          <Link
            onClick={() => {
              setHamActive(false);
            }}
            to="/blog"
            className={`menu ${hamActive ? "active" : ""}`}
          >
            Blog
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
