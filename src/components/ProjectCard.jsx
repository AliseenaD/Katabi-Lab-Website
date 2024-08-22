import React from "react";
import '../styles/componentStyles.css';
import { Fade } from "react-awesome-reveal";

export default function ProjectCard({ project }) {
    return (
        <Fade direction="up" triggerOnce>
            <div className="projectCard-content">
                <p id="card-title">{project.title}</p>
                <img src={project.image} alt="Placeholder" />
                <p id="card-description">{project.description}</p>
            </div>
        </Fade>
    );
}