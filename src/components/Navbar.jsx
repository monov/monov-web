import { Link } from "react-router-dom";
import "./Navbar.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";

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
        <div key={hamActive} className="mom-wrapper">
          <div onClick={hamClick} className="hamburger-in"></div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
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
          <motion.div className={`dashboard ${hamActive ? "active" : ""}`}>
            <motion.a
              initial={{ y: 44 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4 }}
              href="https://github.com/monov"
            >
              <FaGithub className="footer-icon frst" />
            </motion.a>
            <motion.a
              initial={{ y: 44 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5 }}
              href="https://www.linkedin.com/in/shokhrukh-usmonov/"
            >
              <FaLinkedin className="footer-icon" />
            </motion.a>

            <motion.a
              initial={{ y: 44 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.6 }}
              href="https://www.instagram.com/smnv_shokh/"
            >
              <FaInstagram className="footer-icon" />
            </motion.a>

            <motion.a
              initial={{ y: 44 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.7 }}
              href="https://t.me/smnv_shokh"
            >
              <FaTelegram className="footer-icon" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
