import React from "react";
import Button from "../components/Button";
import Swal from 'sweetalert2';
import styles from "../styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "0ccd2e18-996a-4713-8da4-b4ee52eba7e1");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully to Esra'a!",
                icon: "success"
              });
        }
      };

    return (
        <section id="contact" className={styles.contactWrapper}>
            <h2 className={styles.sectionTitle}>Contact Me</h2>
            <form className={styles.contactForm} onSubmit={onSubmit}>
                <input className={styles.input} type="text" placeholder="Your Name" name="name" required />
                <input className={styles.input} type="email" placeholder="Your Email" name="email" required />
                <textarea className={styles.textarea} rows="5" placeholder="Your Message" name="message" required></textarea>
                <Button to="/projects">Send Message</Button>
            </form>
            <div className={styles.socialLinks}>
                <h3>Connect with me:</h3>
                <a className={styles.socialLink} href="https://www.linkedin.com/in/esra-a-eid-a489b3280/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a className={styles.socialLink} href="https://github.com/EsraaEid2" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a className={styles.socialLink} href="mailto:esraa.eidd2@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "0.5rem" }} />
                </a>

            </div>
        </section>
    );
};

export default Contact;
