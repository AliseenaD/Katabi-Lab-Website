import React from "react";
import '../styles/componentStyles.css';
import { Fade } from "react-awesome-reveal";

export default function ProjectCard({ project }) {
    return (
        <Fade direction="up" triggerOnce>
            <div className="projectCard-content">
                <p id="card-title">{project.title}</p>
                <div className="image-description">
                    <div className="project-image">
                        <img src={project.image} alt="Placeholder" />
                    </div>
                    <div className="project-description">
                        <p id="card-description">{project.description}</p>
                    </div>
                </div>
            </div>
        </Fade>
    );
}