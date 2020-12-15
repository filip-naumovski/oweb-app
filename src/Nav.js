import "./style.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Nav() {
  const [dropdownVisible, setDropdown] = useState(false);

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <nav>
      <h3 className="header-text">OWEB App</h3>
      <ul className="nav-links">
        <Link style={{ textDecoration: "none" }} to="/">
          <li>
            <button className="button">Home</button>
          </li>
        </Link>
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button className="button">Favorites</button>
          {dropdownVisible ? (
            <motion.ul
              initial={{ y: "-30vh" }}
              animate={{ y: 0 }}
              transition={{ duration: "0.4" }}
              className="dropdown-content-visible"
            >
              <Link style={{ textDecoration: "none" }} to="/music">
                <li>
                  <button className="button"> Music </button>
                </li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/food">
                <li>
                  <button className="button"> Food </button>
                </li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/movies">
                <li>
                  <button className="button"> Movies </button>
                </li>
              </Link>
            </motion.ul>
          ) : null}
        </li>
        <Link style={{ textDecoration: "none" }} to="/gallery">
          <li>
            <button className="button">Gallery</button>
          </li>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/contact">
          <li>
            <button className="button">Contact</button>
          </li>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/survey">
          <li>
            <button className="button">Survey</button>
          </li>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/blog">
          <li>
            <button className="button">Blog</button>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
