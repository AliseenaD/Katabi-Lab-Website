import React from "react";
import '../styles/componentStyles.css';
import { Fade } from "react-awesome-reveal";

export default function Footer() {
    return (
        <Fade triggerOnce>
            <div className="footer-content"></div>
        </Fade>
    );
}