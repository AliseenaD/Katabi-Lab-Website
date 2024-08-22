import React from "react";
import '../styles/componentStyles.css';
import { Fade } from "react-awesome-reveal";

export default function ResearchIntro() {
    return (
        <Fade direction="up" triggerOnce>
            <div className="researchIntro-container">
                <p>Our work lies at the intersection of health and machine learning, focusing on advancements in both domains to find new ways of understanding and tracking diseases.</p>
            </div>
        </Fade>
    );
}