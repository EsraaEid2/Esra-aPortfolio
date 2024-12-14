import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path); // Navigate to the desired route
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll to the top
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Links Section */}
        <ul className={styles.footerLinks}>
          <li>
            <button
              className={styles.linkButton}
              onClick={() => handleLinkClick("/")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className={styles.linkButton}
              onClick={() => handleLinkClick("/experience")}
            >
              Experience
            </button>
          </li>
          <li>
            <button
              className={styles.linkButton}
              onClick={() => handleLinkClick("/skills")}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              className={styles.linkButton}
              onClick={() => handleLinkClick("/projects")}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className={styles.linkButton}
              onClick={() => handleLinkClick("/contact")}
            >
              Contact Me
            </button>
          </li>
        </ul>

        {/* Copyright and Social Links Section */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Esra'a Eid. All rights reserved.
          </p>
          <div className={styles.socialLinks}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
