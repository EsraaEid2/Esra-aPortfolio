import React from "react";
import styles from "../styles/skills.module.css";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiCss3, SiPhp, SiMysql, SiLaravel, SiTrello } from "react-icons/si";

const Skills = () => {
    const frontEndSkills = [
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss3 /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "React", icon: <FaReact /> },
    ];

    const backEndSkills = [
        { name: "PHP", icon: <SiPhp /> },
        { name: "Laravel", icon: <SiLaravel /> },
    ];

    const databaseSkills = [
        { name: "MySQL", icon: <SiMysql /> },
    ];

    const otherSkills = [
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Trello", icon: <SiTrello /> },
    ];

    return (
        <section className={styles.skillsWrapper}>
            <h2 className={styles.sectionTitle}>Skills</h2>

            <div className={styles.skillsContainer}>
                <div className={styles.skillCategory}>
                    <h3 className={styles.skillTitle}>Front-End</h3>
                    <div className={styles.skillList}>
                        {frontEndSkills.map((skill, index) => (
                            <div key={index} className={styles.skillItem}>
                                <div className={styles.icon}>{skill.icon}</div>
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.skillCategory}>
                    <h3 className={styles.skillTitle}>Back-End</h3>
                    <div className={styles.skillList}>
                        {backEndSkills.map((skill, index) => (
                            <div key={index} className={styles.skillItem}>
                                <div className={styles.icon}>{skill.icon}</div>
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.skillCategory}>
                    <h3 className={styles.skillTitle}>Database</h3>
                    <div className={styles.skillList}>
                        {databaseSkills.map((skill, index) => (
                            <div key={index} className={styles.skillItem}>
                                <div className={styles.icon}>{skill.icon}</div>
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.skillCategory}>
                    <h3 className={styles.skillTitle}>Others</h3>
                    <div className={styles.skillList}>
                        {otherSkills.map((skill, index) => (
                            <div key={index} className={styles.skillItem}>
                                <div className={styles.icon}>{skill.icon}</div>
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
