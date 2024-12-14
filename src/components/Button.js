// components/Button.js
import React from "react";
import styles from "../styles/Button.module.css";

const Button = ({ children, to, onClick, type = "button", className = "", ...props }) => {
    if (to) {
        // If the button has a `to` prop, render it as a link
        return (
            <a href={to} className={`${styles.ctaButton} ${className}`} {...props}>
                {children}
            </a>
        );
    }
    // Otherwise, render it as a standard button
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${styles.ctaButton} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
