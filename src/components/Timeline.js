// components/Timeline.js
import React from "react";
import styles from "../styles/Timeline.module.css";

const Timeline = ({ timelineData }) => {
    return (
        <div className={styles.timelineSection}>
            <h3>Work Experience</h3>
            <div className={styles.timeline}>
                {timelineData.map((item, index) => (
                    <div key={index} className={styles.timelineItem}>
                        <div className={styles.timelineContent}>
                            <h3>{item.title}</h3>
                            <p>{item.date}</p>
                            <ul>
                                {item.description.map((desc, idx) => (
                                    <li key={idx}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
