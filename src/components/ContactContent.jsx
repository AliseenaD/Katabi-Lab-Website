import React from "react";
import '../styles/componentStyles.css';
import { Fade } from "react-awesome-reveal";

export default function ContactContent() {
    return (
        <div className="contact-container">
            <Fade delay={300} direction="up" triggerOnce>
                <div className="positions-container">
                    <div className="positions-child">
                        <p id="container-label">PhD Applicants</p>
                        <p>Apply through EECS PhD Application portal and place prof. Dina Katabi as one of the primary advisors. Recommended to also reach out through email to dk@mit.edu to introduce yourself.</p>
                    </div>
                    <div className="positions-child">
                        <p id="container-label">Intern Applicants</p>
                        <p>Email alimirz@mit.edu with an introduction and a copy of your resume, with subject title MIT-UROP</p>
                    </div>
                    <div className="positions-child">
                        <p id="container-label">Sponsors & Collaborators</p>
                        <p>Email our lab administrator, Mary McDavitt at mmcdavit@csail.mit.edu and Prof. Katabi at dk@mit.edu</p>
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