import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = ({ active }) => {
  return (
    <motion.div
      key={active}
      initial={{ transform: "scaleX(0)" }}
      animate={{ transform: "scaleX(1)" }}
      transition={{ delay: 0.1 }}
      className="footer-body"
    >
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
  );
};

export default Footer;