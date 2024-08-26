import React from "react";
import '../styles/componentStyles.css';
import { Fade } from "react-awesome-reveal";
import Copyright from '../assets/copyright.png';

export default function Footer() {
    return (
        <Fade direction="up" triggerOnce>
            <img className="footer-copyright" src={Copyright} alt="copyright"></img>
        </Fade>
    );
}