import { Link } from "react-router-dom";
import "./Navbar.css";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = ({ setActive, active }) => {
  const handleClick = (act) => {
    setActive(act);
    console.log(active);
  };
  const [hamActive, setHamActive] = useState(false);

  const hamClick = () => {
    setHamActive((v) => !v);
    console.log(hamActive);
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
            handleClick("port");
          }}
          className={`navbar-button ${active === "port" ? "active" : ""}`}
        >
          Portfolio
        </Link>
        <Link
          to="/"
          onClick={() => {
            handleClick("home");
          }}
          className={`navbar-button ${active === "home" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="blog"
          onClick={() => {
            handleClick("blog");
          }}
          className={`navbar-button ${active === "blog" ? "active" : ""}`}
        >
          Blog
        </Link>
      </div>
      <div className={`hamburger ${hamActive ? "active" : ""}`}>
        <div onClick={hamClick} className="hamburger-in"></div>
        <div className={`menu-wrapper ${hamActive ? "active" : ""}`}>
          <Link onClick={() => {setHamActive(false)}} to="/" className={`menu ${hamActive ? "active" : ""}`}>Home</Link>
          <Link onClick={() => {setHamActive(false)}} to="/portfolio" className={`menu ${hamActive ? "active" : ""}`}>Portofolio</Link>
          <Link onClick={() => {setHamActive(false)}} to="/blog" className={`menu ${hamActive ? "active" : ""}`}>Blog</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
