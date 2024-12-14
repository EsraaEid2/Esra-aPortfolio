import React from "react";
import styles from "../styles/ProjectCard.module.css";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className={styles.projectCard}>
      <img
        src={project.image}
        alt={project.title}
        className={styles.projectImage}
      />
      <div className={styles.projectContent}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.buttonGroup}>
        <button
          className={styles.button}
          onClick={() => onClick(project)} // Pass the full project object
        >
        Live Demo
        </button>
          <a
            className={styles.button}
            href={project.codeLink}
            target="_blank"
            rel="noreferrer"
          >
            Github Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
