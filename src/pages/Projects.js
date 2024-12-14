import React from "react";
import styles from "../styles/Projects.module.css";
import ProjectCard from "../components/ProjectCard"; // Import the ProjectCard component
import useModal from "../hooks/useModal"; // Import custom hook

const Projects = () => {
  const { showModal, activeContent, openModal, closeModal } = useModal(); // Use the custom hook

  const projects = [
    {
      title: "Hikaya - StoryTelling website",
      description:
        "Designed a platform that empowers users to write stories and enhance them using OpenAI, which helps with story ideas and generates suitable images. The platform features a rich text editor powered by the Quill library in Laravel, allowing users to create and format stories seamlessly. Stories can be published on the homepage or saved as drafts, with readers able to like and explore them. Technologies used include React, Laravel, MySQL, OpenAI, Quill, and JavaScript.",
      image: "/assets/images/hikaya.png",
      codeLink: "https://github.com/EsraaEid2/Hikaya",
      demoVideo: "https://www.youtube.com/embed/hOVQgoJS07o?si=MriYTKBBQELERgw_", // Direct link format
    },
    {
      title: "GamifyTech E-commerce Website",
      description:
        "Designed an e-commerce platform for gaming enthusiasts with features like Wish List, Cart, discounts, and order tracking, alongside custom user roles for enhanced functionality. Built with HTML5, CSS3, JavaScript, PHP, and MySQL, it employs the Singleton pattern for secure database connections and was tested on XAMPP for optimal performance.",
      image: "/assets/images/gamify.png",
      codeLink: "https://github.com/HamzasZaitoun/NextLevelTech",
      demoVideo: "https://www.youtube.com/embed/JVcsXP8Lqqc?si=fUh5E3Suw1owh53h", // Update link format
    },
    {
      title: "SmartSpending - Budget tracker web app",
      description:
        "Designed an e-commerce platform for gaming enthusiasts with features like Wish List, Cart, discounts, and order tracking, alongside custom user roles for enhanced functionality. Built with HTML5, CSS3, JavaScript, PHP, and MySQL, it employs the Singleton pattern for secure database connections and was tested on XAMPP for optimal performance.",
      image: "/assets/images/smartSpending.png",
      codeLink: "https://github.com/EsraaEid2/smart_spending",
      demoVideo: "https://www.youtube.com/embed/AIEqkZxbBhE?si=-shnDeiJUQxGEjvo", // Update link format
    },
  ];
  

  return (
    <div className={styles.projectsWrapper}>
      <h2 className={styles.sectionTitle}>Projects</h2>

      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={openModal} // Ensure openModal is passed as onClick prop
          />
        ))}
      </div>

      {showModal && (
  <>
    <div
      className={styles.modalOverlay}
      onClick={closeModal} // Close modal when clicking overlay
    ></div>
    <div className={styles.modal}>
      <h3>{activeContent.title}</h3> {/* Display project title */}

      {activeContent.demoVideo && (
        <div className={styles.videoContainer}>
          <iframe
            width="100%"
            height="auto"
            src={activeContent.demoVideo} // Use the YouTube embed URL
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.videoPlayer}
          ></iframe>
        </div>
      )}



      <button
        className={styles.button}
        onClick={closeModal}
        style={{ marginTop: "1rem" }}
      >
        Close
      </button>
    </div>
  </>
)}

    </div>
  );
};

export default Projects;
