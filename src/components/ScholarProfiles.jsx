import React from "react";
import '../styles/componentStyles.css';
import { Fade } from "react-awesome-reveal";

export default function ScholarProfiles({ individuals, isPI }) {
    return (
        <Fade triggerOnce>
            <div className="scholar-content">
                <div className="scholar-title">
                    {individuals.title}
                </div>
                <ul className="scholar-list">
                    {
                        individuals.content.map((individual) => (
                            <li key={individual.name} className={`individual-content ${isPI ? ' pi' : ''}`}>
                                <div className={`${isPI ? 'pi-photo' : 'individual-photo'}`}>
                                    {
                                        individual.image ? (<img src={individual.image} alt={individual.name}/>) : ''
                                    }
                                </div>
                                <div className="individual-description">
                                    <p id="individual-name">{individual.name}</p>
                                    {individual.email ? (<p id="individual-email">email: {individual.email}</p>) : ''}
                                    <p id="individual-bio">{individual.bio}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </Fade>
    );
}