// Experience.js
import React from "react";
import styles from "../styles/Experience.module.css";
import Timeline from "../components/Timeline";

const Experience = () => {
    // Define the experience data
    const experienceData = [
        {
            title: "Full Stack Web Development Trainee",
            date: "Orange Coding Academy | Sep 2024 - Dec 2024",
            description: [
                "Gained experience with full-stack development using HTML5, CSS3, JavaScript, ReactJS, PHP, MySQL, Laravel, and OOP principles.",
                "Built responsive interfaces with Bootstrap, optimized databases with MySQL, and implemented back-end functionality using MVC architecture.",
                "Collaborated in Agile teams, contributed to sprints, and maintained clean codebases with Git.",
                "Enhanced debugging and troubleshooting skills to ensure smooth functionality and user experience."
            ]
        },
    ];

    return (
        <section className={styles.ExperienceWrapper}>
            <h2 className={styles.sectionTitle}>Experience</h2>

            <div className={styles.bio}>
            </div>

            {/* Pass the experience data to the Timeline component */}
            <Timeline timelineData={experienceData} />
        </section>
    );
};

export default Experience;
