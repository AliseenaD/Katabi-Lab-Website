import React from "react";
import '../styles/componentStyles.css';
import { Fade, Slide } from "react-awesome-reveal";

export default function Footer() {
    return (
        <Fade direction="up" triggerOnce>
            <div className="footer-content"></div>
        </Fade>
    );
}