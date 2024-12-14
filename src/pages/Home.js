import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";

const Home = () => {
    return (
        <section className={styles.homeWrapper}>
            <div className={styles.heroSection}>
                <h1 className={styles.headline}>
                    Hi, I'm <strong>Esra'a Eid</strong>
                </h1>
                <h2 className={styles.subHeading}>Full Stack Web Developer</h2>
                <p>With strong foundation in programming and Software Development Life Cycle (SDLC)</p>
                <Button to="/projects">Check Out My Projects</Button>
            </div>
            <img
                src="../assets/images/imageLogo.png" 
                alt="Profile"
                className={styles.profileImage}
            />
        </section>
    );
};

export default Home;
