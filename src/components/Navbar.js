import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
<nav className={styles.nav} role="navigation" aria-label="Main Navigation">
  <div className={styles.container}>
    {/* Logo */}
    <Link to="/" className={styles.logo}>
      <img src="../../assets/images/logo1.png" alt="Portfolio Logo" />
    </Link>
    
    <div className={styles.rightGroup}>
      {/* Navigation Links */}
      <ul
        className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experience"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Contact Me
          </NavLink>
        </li>
      </ul>
    </div>

    {/* Mobile Menu Toggle Button */}
    <button
      className={styles.menuToggle}
      onClick={toggleMenu}
      aria-expanded={isMenuOpen}
      aria-label="Toggle Menu"
    >
      <span className={styles.menuIcon}></span>
    </button>
  </div>
</nav>

  );
};

export default Navbar;
