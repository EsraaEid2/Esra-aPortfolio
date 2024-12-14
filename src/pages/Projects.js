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
        "Designed a platform that empowers users to write stories and enhance them using OpenAI, which helps with story ideas and generates suitable images. The platform features a rich text editor powered by the Quill library in React, allowing users to create and format stories seamlessly. Stories can be published on the homepage, with readers able to like and explore them. Technologies used include React, Laravel, MySQL, OpenAI, Quill, and JavaScript.",
      image: "/assets/images/hikaya.png",
      liveLink: "https://example.com",
      codeLink: "https://github.com/EsraaEid2/Hikaya",
      demoVideo: "https://drive.google.com/uc?id=YOUR_GOOGLE_DRIVE_ID_1&export=download", // Replace with your Google Drive link
    },
    {
      title: "GamifyTech E-commerce Website",
      description:
        "Designed an e-commerce platform for gaming enthusiasts with features like Wish List, Cart, discounts, and order tracking, alongside custom user roles for enhanced functionality. Built with HTML5, CSS3, JavaScript, PHP, and MySQL, it employs the Singleton pattern for secure database connections and was tested on XAMPP for optimal performance",
      image: "/assets/images/gamify.png",
      liveLink: "https://example.com",
      codeLink: "https://github.com/HamzasZaitoun/NextLevelTech",
      demoVideo: "https://drive.google.com/uc?id=YOUR_GOOGLE_DRIVE_ID_2&export=download", // Replace with your Google Drive link
    },
    {
      title: "SmartSpending - Budget tracker web app",
      description:
        "Created a budget tracker web app during the Orange Coding Academy bootcamp, featuring expense tracking, savings insights, and currency conversion. Built with HTML5, CSS3, JavaScript, APIs, and Local Storage, with design via Figma and team collaboration on Trello",
      image: "/assets/images/smartSpending.png",
      liveLink: "https://esraaeid2.github.io/smart_spending/",
      codeLink: "https://github.com/EsraaEid2/smart_spending",
      demoVideo: "https://drive.google.com/uc?id=18bC3TpujKUMhXhTy4lPYQ_Cx7MapbQlQ&export=download", // This one is already from Google Drive
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
            <h3>Project Details</h3>
            <p>{activeContent}</p>
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
