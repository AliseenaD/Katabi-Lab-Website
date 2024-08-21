import React from "react";
import '../styles/componentStyles.css';
import { Fade } from "react-awesome-reveal";

export default function ContactContent() {
    return (
        <div className="contact-container">
            <Fade direction="up" triggerOnce>
                <div className="positions-container">
                    <div className="positions-child">
                        <p id="container-label">PhD Applicants</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet vel libero at bibendum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit bibendum.</p>
                    </div>
                    <div className="positions-child">
                        <p id="container-label">Intern Applicants</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet vel libero at bibendum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit bibendum.</p>
                    </div>
                </div>
            </Fade>
            <hr></hr>
            <Fade direction="up" triggerOnce>
                <div className="lab-address">
                    <p id="container-label">Lab Location</p>
                    <p>MIT Computer Science & Artificial Intelligence Lab</p>
                    <p>32 Vassar Street, 32-G936</p>
                    <p>Cambridge, MA 02139</p>
                    <p id="phone">(617) 324-6027</p>
                    <p id="email">dk@mit.edu</p>
                </div>
            </Fade>
        </div>
    );
}